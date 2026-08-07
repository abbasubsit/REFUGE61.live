# REFUGE61 - one-time asset organization script
# Copies source photography from the Desktop drop folders into public/images
# (categorized + cleanly renamed), public/videos, and public/logos.
# Also writes docs/_asset-manifest.csv, the source-of-truth table asset-library.md is built from.

$ErrorActionPreference = "Stop"
$src  = "c:\Users\bsit22f.0037\Desktop\Methu"
$dest = "c:\Users\bsit22f.0037\Desktop\Methu\refuge61\public"
$manifestPath = "c:\Users\bsit22f.0037\Desktop\Methu\refuge61\docs\_asset-manifest.csv"

$manifest = New-Object System.Collections.Generic.List[object]

function Copy-Asset($sourceRelative, $destRelative, $category, $notes) {
  $s = Join-Path $src $sourceRelative
  if (-not (Test-Path -LiteralPath $s)) {
    # Windows filenames on disk may use NFD (decomposed accents); retry normalized.
    $sNfd = Join-Path $src ($sourceRelative.Normalize([System.Text.NormalizationForm]::FormD))
    if (Test-Path -LiteralPath $sNfd) { $s = $sNfd }
  }
  $d = Join-Path $dest $destRelative
  Copy-Item -LiteralPath $s -Destination $d -Force
  $manifest.Add([PSCustomObject]@{
    Category   = $category
    NewPath    = "public/$destRelative"
    SourceFile = $sourceRelative
    Notes      = $notes
  })
}

# ---------- LOGOS ----------
Copy-Asset "LOGOS REFUGE61\logo HD N&B.png"                       "logos/refuge61-logo-black-white.png"        "logo" "Primary logo, black & white, transparent PNG"
Copy-Asset "LOGOS REFUGE61\REFUGE61_logo_fond_gris_pierre.pdf"     "logos/refuge61-logo-on-stone-grey.pdf"      "logo" "Logo lockup on stone-grey background plate"
Copy-Asset "LOGOS REFUGE61\REFUGE61_logo_fond_vert_foret.pdf"      "logos/refuge61-logo-on-forest-green.pdf"    "logo" "Logo lockup on forest-green background plate"
Copy-Asset "LOGOS REFUGE61\REFUGE61_logo_fond_vert_sauge.pdf"      "logos/refuge61-logo-on-sage-green.pdf"      "logo" "Logo lockup on sage-green background plate"
Copy-Asset "LOGOS REFUGE61\refuge61_logo_gris_pierre.pdf"          "logos/refuge61-wordmark-stone-grey.pdf"     "logo" "Wordmark, stone-grey, transparent"
Copy-Asset "LOGOS REFUGE61\refuge61_logo_vert_foret.pdf"           "logos/refuge61-wordmark-forest-green.pdf"   "logo" "Wordmark, forest-green, transparent"
Copy-Asset "LOGOS REFUGE61\refuge61_logo_vert_sauge.pdf"           "logos/refuge61-wordmark-sage-green.pdf"     "logo" "Wordmark, sage-green, transparent"

# ---------- VIDEOS ----------
Copy-Asset "VIDEO+Photos Iphone\Teaser 2606 HD.mp4"  "videos/refuge61-teaser.mp4"        "video" "Primary teaser/brand film - hero video background candidate (262MB, needs web compression before shipping)"
Copy-Asset "VIDEO+Photos Iphone\IMG_2232.MOV"        "videos/lifestyle-clip-01.MOV"      "video" "Handheld iPhone clip, candid lifestyle footage (27MB)"
Copy-Asset "RUSH MISUSAETER\IMG_2104.MOV"            "videos/lifestyle-clip-02.MOV"      "video" "Handheld iPhone clip, ski-touring/rush trip footage (43MB)"

# ================= IMAGES =================

# ---- HERO: the strongest wide establishing shots ----
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkasen aerial sunrise.JPG"                 "images/hero/hero-aerial-sunrise.jpg"          "hero" "Aerial, dawn/dusk light, whole property in snow - top hero candidate"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Flyfoto vinter.JPG"                           "images/hero/hero-aerial-winter-wide.jpg"      "hero" "Aerial fisheye, full estate + surrounding fjell, winter dusk"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Svart hvitt front.jpg"                        "images/hero/hero-bw-frost-facade.jpg"         "hero" "Black & white, frost-covered carved timber facade - editorial/graphic"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Svart hvitt front øst fasade 01.jpg"          "images/hero/hero-bw-facade-east.jpg"          "hero" "Black & white, east facade, alternate crop/angle of the above"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkasen aerial photos-009.JPG"              "images/hero/hero-aerial-alt-01.jpg"           "hero" "Aerial daylight alternate"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkasen aerial photos-011.JPG"               "images/hero/hero-aerial-alt-02.jpg"          "hero" "Aerial daylight alternate"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkasen aerial photos-020.JPG"               "images/hero/hero-aerial-alt-03.jpg"          "hero" "Aerial daylight alternate"

# ---- ARCHITECTURE: exterior building shots ----
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Badehuset ferdig.JPG"           "images/architecture/architecture-bathhouse-exterior-01.jpg" "architecture" "Stone-and-glass bathhouse, completed, snow setting"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Jakthytta vinter 03.jpg"        "images/architecture/architecture-lodge-winter-01.jpg"        "architecture" "Main lodge exterior, winter"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkaasen.JPG"                 "images/architecture/architecture-lodge-exterior-01.jpg"       "architecture" "Main lodge exterior"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkaasen-012.JPG"             "images/architecture/architecture-lodge-exterior-02.jpg"       "architecture" "Exterior detail"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkaasen-025.JPG"             "images/architecture/architecture-lodge-exterior-03.jpg"       "architecture" "Exterior detail"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkaasen-059.JPG"             "images/architecture/architecture-lodge-exterior-04.jpg"       "architecture" "Exterior detail"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkaasen-072.JPG"             "images/architecture/architecture-lodge-exterior-05.jpg"       "architecture" "Exterior detail"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkaasen-073.JPG"             "images/architecture/architecture-lodge-exterior-06.jpg"       "architecture" "Exterior detail"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkasen hunting lodge in Gala-006.jpg"  "images/architecture/architecture-lodge-exterior-07.jpg" "architecture" "Professional exterior photography, large file/high-res"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkasen hunting lodge in Gala-008.jpg"  "images/architecture/architecture-lodge-exterior-08.jpg" "architecture" "Professional exterior photography, large file/high-res"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkasen hunting lodge in Gala-016.jpg"  "images/architecture/architecture-lodge-exterior-09.jpg" "architecture" "Professional exterior photography, large file/high-res"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkasen hunting lodge in Gala-061.jpg"  "images/architecture/architecture-lodge-exterior-10.jpg" "architecture" "Professional exterior photography, large file/high-res"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkasen hunting lodge in Gala-065.jpg"  "images/architecture/architecture-lodge-exterior-11.jpg" "architecture" "Professional exterior photography, large file/high-res"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkasen hunting lodge in Gala-118.jpg"  "images/architecture/architecture-lodge-exterior-12.jpg" "architecture" "Professional exterior photography"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkasen hunting lodge in Gala-188.jpg"  "images/architecture/architecture-lodge-exterior-13.jpg" "architecture" "Professional exterior photography"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Bjorkasen hunting lodge in Gala-190.jpg"  "images/architecture/architecture-lodge-exterior-14.jpg" "architecture" "Professional exterior photography"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\IMG_0556.JPG"                   "images/architecture/architecture-lodge-exterior-15.jpg"       "architecture" "Exterior snapshot, low-res"
Copy-Asset "PHOTOS DETAIL CHALET\Badehuset\Bjorkasen hunting lodge in Gala-042.jpg" "images/architecture/architecture-bathhouse-02.jpg"     "architecture" "Bathhouse, stone & glass, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Badehuset\Bjorkasen hunting lodge in Gala-045.jpg" "images/architecture/architecture-bathhouse-03.jpg"     "architecture" "Bathhouse, stone & glass, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Badehuset\Bjorkasen hunting lodge in Gala-046.jpg" "images/architecture/architecture-bathhouse-04.jpg"     "architecture" "Bathhouse, stone & glass, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Badehuset\Bjorkasen hunting lodge in Gala-052.jpg" "images/architecture/architecture-bathhouse-05.jpg"     "architecture" "Bathhouse, stone & glass, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Badehuset\Bjorkasen hunting lodge in Gala-053.jpg" "images/architecture/architecture-bathhouse-06.jpg"     "architecture" "Bathhouse, stone & glass, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Badehuset\Bjorkasen hunting lodge in Gala-054.jpg" "images/architecture/architecture-bathhouse-07.jpg"     "architecture" "Bathhouse, stone & glass, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Badehuset\Bjorkasen hunting lodge in Gala-055.jpg" "images/architecture/architecture-bathhouse-08.jpg"     "architecture" "Bathhouse, stone & glass, professional"

# ---- INTERIORS: living room, bedroom, caretaker cottage kitchen ----
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkaasen-050.JPG" "images/interiors/interiors-livingroom-01.jpg" "interiors" "Living room"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkaasen-052.JPG" "images/interiors/interiors-livingroom-02.jpg" "interiors" "Living room"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkaasen-055.JPG" "images/interiors/interiors-livingroom-03.jpg" "interiors" "Living room"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-001.jpg" "images/interiors/interiors-livingroom-04.jpg" "interiors" "Log-wall corridor with hallway arches - atmospheric, strong texture"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-024.jpg" "images/interiors/interiors-livingroom-05.jpg" "interiors" "Living room, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-028.jpg" "images/interiors/interiors-livingroom-06.jpg" "interiors" "Living room, professional, largest file (12.99MB)"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-036.jpg" "images/interiors/interiors-livingroom-07.jpg" "interiors" "Living room, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-037.jpg" "images/interiors/interiors-livingroom-08.jpg" "interiors" "Living room, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-040.jpg" "images/interiors/interiors-livingroom-09.jpg" "interiors" "Living room, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-121.jpg" "images/interiors/interiors-livingroom-10.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-132.jpg" "images/interiors/interiors-livingroom-11.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-133.jpg" "images/interiors/interiors-livingroom-12.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-134.jpg" "images/interiors/interiors-livingroom-13.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-135.jpg" "images/interiors/interiors-livingroom-14.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-137.jpg" "images/interiors/interiors-livingroom-15.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-142.jpg" "images/interiors/interiors-livingroom-16.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-143.jpg" "images/interiors/interiors-livingroom-17.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-150.jpg" "images/interiors/interiors-livingroom-18.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-182.jpg" "images/interiors/interiors-livingroom-19.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-254.jpg" "images/interiors/interiors-livingroom-20.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-257.jpg" "images/interiors/interiors-livingroom-21.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-258.jpg" "images/interiors/interiors-livingroom-22.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-259.jpg" "images/interiors/interiors-livingroom-23.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-260.jpg" "images/interiors/interiors-livingroom-24.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-263.jpg" "images/interiors/interiors-livingroom-25.jpg" "interiors" "Living room detail"
Copy-Asset "PHOTOS DETAIL CHALET\Oppholdsrom bilder\Bjorkasen hunting lodge in Gala-265.jpg" "images/interiors/interiors-livingroom-26.jpg" "interiors" "Living room detail"

Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkaasen-046.JPG" "images/interiors/interiors-bedroom-01.jpg" "interiors" "Bedroom, mounted deer head above bed - signature hunting-lodge detail"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-108.jpg" "images/interiors/interiors-bedroom-02.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-109.jpg" "images/interiors/interiors-bedroom-03.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-111.jpg" "images/interiors/interiors-bedroom-04.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-145.jpg" "images/interiors/interiors-bedroom-05.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-147.jpg" "images/interiors/interiors-bedroom-06.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-151.jpg" "images/interiors/interiors-bedroom-07.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-154.jpg" "images/interiors/interiors-bedroom-08.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-155.jpg" "images/interiors/interiors-bedroom-09.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-157.jpg" "images/interiors/interiors-bedroom-10.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-159.jpg" "images/interiors/interiors-bedroom-11.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-163.jpg" "images/interiors/interiors-bedroom-12.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-164.jpg" "images/interiors/interiors-bedroom-13.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-165.jpg" "images/interiors/interiors-bedroom-14.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-169.jpg" "images/interiors/interiors-bedroom-15.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-170.jpg" "images/interiors/interiors-bedroom-16.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-174.jpg" "images/interiors/interiors-bedroom-17.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-241.jpg" "images/interiors/interiors-bedroom-18.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-242.jpg" "images/interiors/interiors-bedroom-19.jpg" "interiors" "Bedroom, professional"
Copy-Asset "PHOTOS DETAIL CHALET\Soverom bilder\Bjorkasen hunting lodge in Gala-244.jpg" "images/interiors/interiors-bedroom-20.jpg" "interiors" "Bedroom, professional"

Copy-Asset "PHOTOS DETAIL CHALET\Vaktmester hytta\Bjorkasen hunting lodge in Gala-070.jpg" "images/interiors/interiors-caretaker-cottage-01.jpg" "interiors" "Caretaker's cottage kitchen - rustic, lived-in counterpoint to the main lodge"
Copy-Asset "PHOTOS DETAIL CHALET\Vaktmester hytta\Bjorkasen hunting lodge in Gala-074.jpg" "images/interiors/interiors-caretaker-cottage-02.jpg" "interiors" "Caretaker's cottage"
Copy-Asset "PHOTOS DETAIL CHALET\Vaktmester hytta\Bjorkasen hunting lodge in Gala-075.jpg" "images/interiors/interiors-caretaker-cottage-03.jpg" "interiors" "Caretaker's cottage"
Copy-Asset "PHOTOS DETAIL CHALET\Vaktmester hytta\Bjorkasen hunting lodge in Gala-076.jpg" "images/interiors/interiors-caretaker-cottage-04.jpg" "interiors" "Caretaker's cottage"
Copy-Asset "PHOTOS DETAIL CHALET\Vaktmester hytta\Bjorkasen hunting lodge in Gala-077.jpg" "images/interiors/interiors-caretaker-cottage-05.jpg" "interiors" "Caretaker's cottage"
Copy-Asset "PHOTOS DETAIL CHALET\Vaktmester hytta\Bjorkasen hunting lodge in Gala-080.jpg" "images/interiors/interiors-caretaker-cottage-06.jpg" "interiors" "Caretaker's cottage"
Copy-Asset "PHOTOS DETAIL CHALET\Vaktmester hytta\Bjorkasen hunting lodge in Gala-081.jpg" "images/interiors/interiors-caretaker-cottage-07.jpg" "interiors" "Caretaker's cottage"
Copy-Asset "PHOTOS DETAIL CHALET\Vaktmester hytta\Bjorkasen hunting lodge in Gala-082.jpg" "images/interiors/interiors-caretaker-cottage-08.jpg" "interiors" "Caretaker's cottage"
Copy-Asset "PHOTOS DETAIL CHALET\Vaktmester hytta\Bjorkasen hunting lodge in Gala-085.jpg" "images/interiors/interiors-caretaker-cottage-09.jpg" "interiors" "Caretaker's cottage"
Copy-Asset "PHOTOS DETAIL CHALET\Vaktmester hytta\Bjorkasen hunting lodge in Gala-088.jpg" "images/interiors/interiors-caretaker-cottage-10.jpg" "interiors" "Caretaker's cottage"
Copy-Asset "PHOTOS DETAIL CHALET\Vaktmester hytta\Bjorkasen hunting lodge in Gala-223.jpg" "images/interiors/interiors-caretaker-cottage-11.jpg" "interiors" "Caretaker's cottage"

# ---- STORY: decor/detail close-ups that carry the brand narrative ----
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-003.JPG" "images/story/story-detail-01.jpg" "story" "Decor detail, kitchen lighting/objects"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-004.JPG" "images/story/story-detail-02.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-007.JPG" "images/story/story-detail-03.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-009.JPG" "images/story/story-detail-04.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-011.JPG" "images/story/story-detail-05.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-017.JPG" "images/story/story-detail-06.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-018.JPG" "images/story/story-detail-07.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-023.JPG" "images/story/story-detail-08.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-027.JPG" "images/story/story-detail-09.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-028.JPG" "images/story/story-detail-10.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-029.JPG" "images/story/story-detail-11.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-030.JPG" "images/story/story-detail-12.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-036.JPG" "images/story/story-detail-13.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-043.JPG" "images/story/story-detail-14.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-048.JPG" "images/story/story-detail-15.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-057.JPG" "images/story/story-detail-16.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-062.JPG" "images/story/story-detail-17.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-085.JPG" "images/story/story-detail-18.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-094.JPG" "images/story/story-detail-19.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-097.JPG" "images/story/story-detail-20.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\Bjorkaasen-098.JPG" "images/story/story-detail-21.jpg" "story" "Decor detail"
Copy-Asset "PHOTOS DETAIL CHALET\Déco dans le chalet\IMG_0624[4000].JPG" "images/story/story-detail-22.jpg" "story" "Decor detail, lower-res snapshot"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Mirabeau Roses on icy shelf.jpg" "images/story/story-roses-on-ice.jpg" "story" "Romantic still-life detail, roses on an icy stone shelf"
Copy-Asset "PHOTOS DETAIL CHALET\Ute bilder\Boule 1.jpg" "images/story/story-boules-game.jpg" "story" "Outdoor pétanque/boules set, summer-life detail"

# ---- LIFESTYLE: people, candid, family, ski touring ----
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\50ae952c-e7e1-4e01-a017-9772a9201de6.JPG" "images/lifestyle/lifestyle-family-01.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\71ed176c-c618-43f1-950c-2e32f84cdfe8.JPG" "images/lifestyle/lifestyle-family-02.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\bb59a1be-4edc-4428-9d2e-7ca161371ea3.JPG" "images/lifestyle/lifestyle-family-03.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\cfe4dc6c-fa5f-4ccf-a75d-24a87815daf9.JPG" "images/lifestyle/lifestyle-family-04.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_0124.JPG" "images/lifestyle/lifestyle-family-05-kitchen-detail.jpg" "lifestyle" "Kitchen ceiling/pendant-light detail shot, warm candid mood"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_0131.JPG" "images/lifestyle/lifestyle-family-06.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_0248.JPG" "images/lifestyle/lifestyle-family-07.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_0250.JPG" "images/lifestyle/lifestyle-family-08.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_0506.JPG" "images/lifestyle/lifestyle-family-09.jpg" "lifestyle" "Family candid, low-res"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_0706.JPG" "images/lifestyle/lifestyle-family-10.jpg" "lifestyle" "Family candid, low-res"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_0719.JPG" "images/lifestyle/lifestyle-family-11.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_1500.JPG" "images/lifestyle/lifestyle-family-12.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_1504.JPG" "images/lifestyle/lifestyle-family-13.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_1611.JPG" "images/lifestyle/lifestyle-family-14.jpg" "lifestyle" "Family candid, low-res"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_2281.PNG" "images/lifestyle/lifestyle-family-15.png" "lifestyle" "Family candid, PNG screenshot-quality"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_2330.JPG" "images/lifestyle/lifestyle-family-16.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_2603.JPG" "images/lifestyle/lifestyle-family-17.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_2610.JPG" "images/lifestyle/lifestyle-family-18.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_2621.JPG" "images/lifestyle/lifestyle-family-19.jpg" "lifestyle" "Family candid"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_3749.JPG" "images/lifestyle/lifestyle-family-20.jpg" "lifestyle" "Family candid, low-res"
Copy-Asset "PHOTOS DETAIL CHALET\Famille dans le chalet\IMG_3942.JPG" "images/lifestyle/lifestyle-family-21.jpg" "lifestyle" "Family candid, very low-res"

Copy-Asset "RUSH MISUSAETER\0E644BEE-63EC-4BB7-9F7D-234EF1C74BA7_1_105_c.jpeg" "images/lifestyle/lifestyle-rush-01.jpg" "lifestyle" "Candid - cabin breakfast/charcuterie, warm interior mood"
Copy-Asset "RUSH MISUSAETER\22C01318-51C3-4A91-9C35-95AF0F104D89_1_105_c.jpeg" "images/lifestyle/lifestyle-rush-02.jpg" "lifestyle" "Candid, ski-touring trip"
Copy-Asset "RUSH MISUSAETER\2EB32CC7-A682-41D6-B75A-E31E3BF88FDD_1_105_c.jpeg" "images/lifestyle/lifestyle-rush-03.jpg" "lifestyle" "Candid, ski-touring trip"
Copy-Asset "RUSH MISUSAETER\4DC0FB1E-E570-4422-9D4E-0C5A63C9B491_1_105_c.jpeg" "images/lifestyle/lifestyle-rush-04.jpg" "lifestyle" "Candid, ski-touring trip"
Copy-Asset "RUSH MISUSAETER\4EA18C08-D1A2-407D-820E-FC9627A4D936_1_105_c.jpeg" "images/story/story-ski-touring-sunset.jpg" "story" "Wide landscape, ski track through snow toward the estate at sunset - strong storytelling/journey shot"
Copy-Asset "RUSH MISUSAETER\7504C9B4-948E-4F7C-BF69-3FEB7CAC4DE8_1_201_a.heic" "images/lifestyle/lifestyle-rush-05.heic" "lifestyle" "Candid, HEIC (needs conversion to JPG/WebP for web use)"
Copy-Asset "RUSH MISUSAETER\7A5727E1-C720-45D6-99EC-B602902628A6_1_105_c.jpeg" "images/lifestyle/lifestyle-rush-06.jpg" "lifestyle" "Candid, ski-touring trip"
Copy-Asset "RUSH MISUSAETER\8933F037-85CF-4254-B295-200A7EB3F862_1_105_c.jpeg" "images/lifestyle/lifestyle-rush-07.jpg" "lifestyle" "Candid, ski-touring trip"
Copy-Asset "RUSH MISUSAETER\D3A13DC7-E120-4A07-8FBC-2E9F50BF7A25_1_105_c.jpeg" "images/lifestyle/lifestyle-rush-08.jpg" "lifestyle" "Candid, ski-touring trip"
Copy-Asset "RUSH MISUSAETER\D8722791-2E85-427F-B47A-F6144BC31B0B_1_201_a.heic" "images/lifestyle/lifestyle-rush-09.heic" "lifestyle" "Candid, HEIC (needs conversion to JPG/WebP for web use)"
Copy-Asset "RUSH MISUSAETER\EB27E362-F66D-45CA-927A-9E5514EE544A_1_105_c.jpeg" "images/lifestyle/lifestyle-rush-10.jpg" "lifestyle" "Candid, ski-touring trip"

Copy-Asset "VIDEO+Photos Iphone\034A5056-ADC5-416A-97AD-C3060953AD01_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-01.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\054C5A83-AC27-4374-B484-FCFFB04E01E1_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-02.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\0958FC75-2BB0-401A-8D08-84C42DEA6EB8_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-03.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\1A991A5C-A14E-422A-9119-054620470916_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-04.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\2813D781-6CB7-4CE9-852E-9462AA41B1E4_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-05.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\3C2BD80B-0915-4D08-9E5E-80DF508FFE46_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-06.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\3E873830-0F7E-47AA-8B64-B5E7746B526F_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-07.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\523804E2-FD6D-458A-BCD2-244B8FEAD276_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-08.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\89718E63-36D1-46A5-BAE0-C5881F1E90BB_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-09.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\92479AB9-7E23-4F73-9B08-5C0E88B1C44A_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-10.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\941887BE-5A67-4CDE-AE75-7CF980A41837_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-11.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\9E017479-E36B-4C57-9BCB-66F3C84305F2_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-12.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\A284BD33-02C3-458E-9D1F-3F2E51BD7D13_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-13.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\A77191F9-5496-4D79-A132-8F74B89C93BF_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-14.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\B3DB74ED-3BDB-4A2B-AB27-9AC0CC9AA4A4_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-15.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\B4F1BBE8-34C0-412E-A5D1-226E76987EE4_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-16.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\Bjorn&Mathieu.jpeg" "images/lifestyle/lifestyle-portrait-bjorn-mathieu.jpg" "lifestyle" "Named portrait - two people ski touring at sunset, upside-down selfie framing, high-res (2.96MB)"
Copy-Asset "VIDEO+Photos Iphone\D288709D-C7A0-4B8A-993A-CA63ADC268E8_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-17.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\E6CC4B30-2760-43FE-B5AC-67601FD950E0_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-18.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\E90CBE89-A01C-4D6B-8D0B-BEED24CB3DE8_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-19.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\EC123DEA-B481-4B06-9BDE-6754D4A6ED2C_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-20.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\F22D8C25-EBBD-48A0-8923-6FC28FF3716B_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-21.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\F8DB8CFB-2FE2-4384-84D9-28B3A7E45ACD_1_105_c.jpeg" "images/lifestyle/lifestyle-iphone-22.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\IMG_1964.jpeg" "images/story/story-ski-tracks-landscape.jpg" "story" "Wide cross-country ski landscape, skier mid-frame - journey/adventure storytelling shot"
Copy-Asset "VIDEO+Photos Iphone\IMG_2032.jpeg" "images/lifestyle/lifestyle-iphone-23.jpg" "lifestyle" "Candid iPhone photo"
Copy-Asset "VIDEO+Photos Iphone\IMG_2194.jpeg" "images/lifestyle/lifestyle-iphone-24.jpg" "lifestyle" "Candid iPhone photo"

$manifest | Export-Csv -Path $manifestPath -NoTypeInformation -Encoding UTF8
Write-Output ("Copied {0} assets. Manifest written to {1}" -f $manifest.Count, $manifestPath)
