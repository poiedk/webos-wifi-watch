# WiFi Watch for webOS — v0.1.0

Diagnostic Homebrew app for rooted LG webOS TVs with a TV-friendly graphical interface.

## Features

- graphical dashboard for Wi-Fi health
- monitors `wlan0` every 5 seconds
- pings gateway `192.168.1.254`
- shows SSID, IP, latency, RX packets/drops and last failure
- remote-friendly focus states and Back-key handling
- diagnostics view with routes, wireless state, ConnMan and recent log
- failure snapshots in `/tmp/wifi-watch.log`
- rotating log: 1 MB current + 1 MB previous
- automatic recovery intentionally disabled in v0.1

## Build

The project uses LG's current webOS CLI:

    npm install -g @webos-tools/cli
    ./scripts/build.sh

LG's packaging requirement is respected: the service ID
`org.webosbrew.wifiwatch.service` is a subdomain of the app ID
`org.webosbrew.wifiwatch`.

## GitHub Actions

Every push to `main` builds and uploads an IPK as a workflow artifact.

Tags matching `v*` also create/update a GitHub Release and attach the generated IPK.

Example release:

    git tag v0.1.0
    git push origin v0.1.0

## Install

Install the generated `.ipk` using your normal Homebrew / webOS CLI flow.

## Target

Initial hardware/software target:

- LG 50UH635V
- Rockhopper / webOS 3.4.3
- rooted Homebrew environment

The service intentionally uses ES5-style JavaScript for compatibility with older webOS runtimes.

## Back key

Keycode `461` closes Diagnostics first; otherwise it exits WiFi Watch instead of acting like Home.
