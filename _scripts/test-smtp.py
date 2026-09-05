# -*- coding: utf-8 -*-
"""
Prove that the website can send mail through the one.com mailbox.

Receiving mail and sending through a mailbox are different things, and only
the second one matters for the Let's Talk questionnaire. This logs in to
one.com's SMTP server exactly as the site will and sends one test message.

It is a local check only -- never deployed, never part of the build.

    python _scripts/test-smtp.py you@example.com

Reads credentials from .env.local, which is git-ignored:

    SMTP_HOST=send.one.com
    SMTP_PORT=465
    SMTP_USER=hello@refuge61.com
    SMTP_PASS=the mailbox password

If this succeeds, the PHP form handler on one.com will work too -- it uses the
same server, port and credentials.
"""
import io
import os
import smtplib
import ssl
import sys
from email.message import EmailMessage


def load_env(path=".env.local"):
    """Minimal .env reader -- avoids adding a dependency for four values."""
    values = {}
    try:
        for line in io.open(path, encoding="utf-8"):
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, value = line.partition("=")
            values[key.strip()] = value.strip().strip('"').strip("'")
    except OSError:
        pass
    return values


def main():
    if len(sys.argv) < 2:
        raise SystemExit("usage: python _scripts/test-smtp.py you@example.com")
    to = sys.argv[1]

    env = load_env()
    host = env.get("SMTP_HOST") or os.environ.get("SMTP_HOST", "send.one.com")
    port = int(env.get("SMTP_PORT") or os.environ.get("SMTP_PORT", "465"))
    user = env.get("SMTP_USER") or os.environ.get("SMTP_USER", "")
    password = env.get("SMTP_PASS") or os.environ.get("SMTP_PASS", "")

    if not user or not password:
        raise SystemExit(
            "SMTP_USER and SMTP_PASS are missing.\n"
            "Add them to .env.local (see the docstring at the top of this file).\n"
            "That file is git-ignored, so the password stays on this machine."
        )

    message = EmailMessage()
    message["From"] = user
    message["To"] = to
    message["Subject"] = "REFUGE61 — SMTP test"
    message.set_content(
        "If you are reading this, the website can send mail through "
        "%s.\n\nSent by _scripts/test-smtp.py via %s:%d." % (user, host, port)
    )

    print("connecting to %s:%d as %s ..." % (host, port, user))
    context = ssl.create_default_context()
    try:
        with smtplib.SMTP_SSL(host, port, context=context, timeout=30) as smtp:
            smtp.login(user, password)
            smtp.send_message(message)
    except smtplib.SMTPAuthenticationError:
        raise SystemExit(
            "REJECTED: the server did not accept that username/password.\n"
            "Check SMTP_USER is the full address (hello@refuge61.com) and that\n"
            "the password matches the one set when the mailbox was created."
        )
    except (smtplib.SMTPException, OSError) as error:
        raise SystemExit("FAILED: %s" % error)

    print("SENT — check %s (and its spam folder)." % to)
    print("The website will be able to send through this mailbox.")


if __name__ == "__main__":
    main()
