# -*- coding: utf-8 -*-
"""
Put JSX braces back around attribute values the wrapper turned into calls.

wrap.py's string-literal pass rewrites `"text"` to `t(locale, "text")`, which
is right for an object value (`headline: t(...)`) but wrong for a JSX
attribute -- `headline=t(...)` is a syntax error, it has to be
`headline={t(...)}`. This repairs files written before wrap.py knew the
difference.
"""
import io
import re
import sys

ATTR_CALL = re.compile(r'(\s)([A-Za-z_][\w]*)=(t\(locale,\s*"(?:[^"\\]|\\.)*"\))')


def fix(path):
    try:
        src = io.open(path, encoding="utf-8").read()
    except OSError:
        return 0
    new, n = ATTR_CALL.subn(
        lambda m: "%s%s={%s}" % (m.group(1), m.group(2), m.group(3)), src
    )
    if n:
        io.open(path, "w", encoding="utf-8").write(new)
    return n


if __name__ == "__main__":
    for p in sys.argv[1:]:
        n = fix(p)
        print("%-46s %2d attribute(s) braced" % (p, n))
