# WiFi Watch for webOS — v0.1.0

Diagnostic Homebrew app for rooted LG webOS TVs with a TV-friendly graphical interface.

## v0.1 scope
- monitors `wlan0` every 5 seconds
- pings gateway `192.168.1.254`
- graphical dashboard for SSID, IP, latency, RX packets/drops and last failure
- remote-friendly focus states and Back-key handling
- diagnostics view with routes, wireless state, ConnMan and recent log
- stores failure snapshots in `/tmp/wifi-watch.log`
- rotates at 1 MB (+ one previous file)
- no automatic recovery yet

## Package layout
Package `app/` and `service/` together using the webOS CLI:

    ares-package app service

Install the produced IPK on the rooted TV with your normal Homebrew/ares flow.

## Target
Initial target: Rockhopper / webOS 3.4.3.

The service intentionally uses old-style ES5 JavaScript for compatibility. If the TV's bundled Node/service runtime rejects `child_process.execSync`, the next revision will move privileged shell execution to a Homebrew-compatible root execution path.

## Back key
Keycode 461 hides diagnostics first; otherwise it closes the app instead of behaving like Home.
