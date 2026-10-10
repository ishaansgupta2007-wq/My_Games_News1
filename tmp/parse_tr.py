import re

with open("/tmp/share_tr.html", "r", errors="ignore") as f:
    text = f.read()

print("Title:", re.findall(r"<title>(.*?)</title>", text, re.I))

# Find all occurrences of image URLs
for m in re.finditer(r'https?://[^\s"\'\\]+\.(?:jpg|jpeg|png|webp)', text, re.I):
    print("Direct img:", m.group(0))

for m in re.finditer(r'\[\"(https?://[^\"]+?)\",\s*(\d+),\s*(\d+)\]', text):
    print("Full Image candidate:", m.group(1), m.group(2), m.group(3))

for m in re.finditer(r'href=[\"\'](https?://[^\s\"\']+)[\"\']', text):
    href = m.group(1)
    if "google.com" not in href:
        print("External link:", href)
