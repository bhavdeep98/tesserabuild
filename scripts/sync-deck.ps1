<#
.SYNOPSIS
  Publishes the Home Passport reveal deck into the Tessera site under an
  unlisted path. Blind copy from the deck source folder — no diffing, no git.

.DESCRIPTION
  The deck is authored in the Blockchain Demo\deck folder (not a git repo).
  This script copies the deck HTML plus its two asset folders (demo-shots,
  embeds) into public/x/<slug>/ so the existing GitHub Pages workflow ships it.

  The path is unlisted: it is not linked anywhere on the site and not in any
  sitemap, so it is only reachable by the exact URL. It is NOT private —
  anyone with the link can view it.

  Run this, review the copied files, then commit + push to publish.

.PARAMETER DeckDir
  Absolute path to the folder containing tessera-home-passport-reveal.html.
#>
param(
  [string]$DeckDir = "c:\Users\bhavd\workspace\Blockchain Demo\deck"
)

$ErrorActionPreference = "Stop"

# Fixed unlisted slug — keep this stable so the share URL never changes.
$Slug = "jcrh8uvkynxug4"

# The deck's entry file and the asset folders it references.
$DeckFile = "tessera-home-passport-reveal.html"
$AssetDirs = @("demo-shots", "embeds")

# Resolve paths. The site root is the parent of this script's directory.
$SiteRoot = Split-Path -Parent $PSScriptRoot
$DestDir  = Join-Path $SiteRoot "public\x\$Slug"

# Sanity check the source.
$SrcFile = Join-Path $DeckDir $DeckFile
if (-not (Test-Path $SrcFile)) {
  throw "Deck file not found: $SrcFile"
}

# Fresh copy every run — remove the old published folder first so deleted
# source files don't linger.
if (Test-Path $DestDir) {
  Remove-Item -Recurse -Force $DestDir
}
New-Item -ItemType Directory -Path $DestDir -Force | Out-Null

# Copy the entry file.
Copy-Item -Path $SrcFile -Destination $DestDir
Write-Host "copied  $DeckFile"

# Copy each asset folder that exists.
foreach ($dir in $AssetDirs) {
  $src = Join-Path $DeckDir $dir
  if (Test-Path $src) {
    Copy-Item -Path $src -Destination $DestDir -Recurse
    $count = (Get-ChildItem -Recurse -File $src).Count
    Write-Host "copied  $dir/ ($count files)"
  } else {
    Write-Host "skipped $dir/ (not found)"
  }
}

Write-Host ""
Write-Host "Published to: public\x\$Slug\"
Write-Host "Share URL:    https://tesserabuild.ai/x/$Slug/$DeckFile"
Write-Host ""
Write-Host "Next: review the files, then commit + push to deploy."
