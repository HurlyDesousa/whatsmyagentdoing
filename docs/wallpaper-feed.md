# Wallpaper feed on the office

The office keeps its own rooms, floors (B / 1 / 2), camera, Berlin sun, hop / ding / done flash, and Share PNG. A Grok Bot wallpaper feed is an extra client-side layer: status, looks, usage, chat links and routines from the same JSON lines the wallpaper dashboard reads.

The office process does not log request URLs (a `?feed=` query would otherwise be the only way a custom topic reached the server). On the Hurly office stack (`hurly-live`), a default wallpaper topic is baked into the client so plain `https://office.s-w.art/` connects without a hash or Settings paste. Hash and Settings still override that default.

## Set the feed

Priority (first match wins), all in the browser:

1. **Hash link**, same forms as the wallpaper: `https://office.s-w.art/#topic` or `https://office.s-w.art/#topic@relay.example.com`. The hash is not sent to the office server.
2. **Settings → Wallpaper feed.** Paste one of:
   - `#topic` — read `https://relay.0xcodila.com/<topic>` and `https://ntfy.sh/<topic>`
   - `#topic@relay.example.com` — that mailbox only
   - `https://relay.example.com/<topic>` — that mailbox only
   Save stores the string in `localStorage` (`wmad.wallpaperLink`) and removes it from the address bar, so a copied office link does not carry it.
3. **`?feed=`** is accepted once (old wallpaper links). The page moves it into the hash and drops the query so a refresh does not send it again.
4. **Office default** (`WallpaperFeed.DEFAULT_FEED_TOPIC`) when nothing else is set — so Open chat works on a plain office origin.

Clear in Settings forgets the saved value, the hash, and the local line cache, then falls back to the office default.

The page polls `/json?poll=1&since=12h`, then follows `/sse`, and replays the last lines from `localStorage` so a quiet night is not an empty roster. Cache entries are `{id, time, message}` only — not the topic. Nothing is posted back to the relay (no usage beacon).

## What shows up

| Feed line | On the office |
|---|---|
| `status` (`working` `idle` `waiting_user` `error` `done`, `step` ≤ 80, optional `group`) | A **live** line on the team row, the bot card, the activity log, and a floor caption when that bot is waiting, selected, or already showing a task |
| `roster` | Quiet bots exist. They do not replace anyone already on the floor |
| `looks` | Recolours the existing jelly blob (see the map below) |
| `usage` | A **used N%** pill on the Kenney floors. **4D** shows the week meter (percent, bar, "resets in …") and each bot's share of that total ("N% of all") |
| `chat` | **Open chat.** The office maps known bots to Paperclip (`https://paperclip.s-w.art/SWA/chats/<urlKey>`) and ignores `grokbot://`. Unmapped bots may still use an `https://` feed link. **4D** opens a Paperclip panel (full-page same-tab fallback) |
| `routines` | A Routines list. **4D** keeps the latest routines, chat, looks, groups and roster lines in this browser after the relay’s 12-hour window drops them |
| `groups` | A label on the bot (`Ops`, `Infra`, `Watch`, …). Not a new floor |

A `working` bot with no new line for 20 minutes counts as idle on the live line. `done` stays for 60 seconds, then idle. Silence past 3 hours counts as idle. Same clocks as the wallpaper client.

## Both Paperclip and the feed

Hurly's crew is already on this floor from Paperclip. The feed usually names the same bots.

- **The desk, the wander, and hop / ding / done flash follow the Paperclip status only.** A feed line does not move a bot and does not replay those cues.
- The feed step and status are shown as well, on a second line marked **live**. The bot card says so when they disagree: Paperclip keeps the desk, and the feed's word is next to it.
- Looks still apply. A feed look (or the remembered default while that bot has no look line) recolours the blob that is already in the room.
- Bots that exist only on the feed are extra Grok Bot avatars on these same floors. Their office status is the feed's effective status (`working` sits down, `waiting_user` waves, `idle` rests). Groups stay labels.

## Looks

Wallpaper shapes map onto the blobs this office already draws:

| Wallpaper | Office blob |
|---|---|
| `triangle` | wedge (pointing right) |
| `rounded_square`, `rounded_cube`, `pentagon`, `hexagon` | squircle |
| `drop`, `bubble` | drop |
| `cloud`, `star4`, `star6`, `clover`, `flower`, `trio` | cloud |
| `pill` | tablet |
| `sphere` | oval |
| `cone` | triangle |

`color` has to be `#RRGGBB`. Accessories (`glasses`, `stem`, `antenna`, `bow`) are a small mark on that blob. Unknown shapes are ignored.

If the feed is connected but a look line has not arrived, these six names use remembered defaults (accessory `none`):

| Bot | Shape | Color | Group |
|---|---|---|---|
| Chief Master | triangle | `#8F59F9` | Ops |
| Doc Master | drop | `#EB2B3E` | Ops |
| Proxmox Master (also "Proximox") | cloud | `#14C16F` | Infra |
| TrueNAS Master | rounded_square | `#A06B39` | Infra |
| Dockhand Master | triangle | `#F93498` | Infra |
| Monitor Master | rounded_square | `#FD690F` | Watch |

With no feed configured, the office keeps its own crew colours. **4D** still uses the remembered looks for those six names so the tower is not a set of random blobs before the first look line.

## 4D tower

The office view is **4D only** (the wallpaper tower). Legacy `?quality=mid` / `high` links and saved 2D/3D prefs redirect to this sole view. **Dark** / **Light** (saved as `wmad.theme`) follows the same browser store. With no saved theme it follows the system. An explicit theme choice stays after reload and tints the tower backdrop.

**4D** is the wallpaper dashboard across the whole window: glossy blobs, stacked floors, and the glass panels (floors, waiting, finished, routines, activity, the floor team, the live clock, usage). The top-right speaker opens **Music** and **Sounds**, the same two switches as the wallpaper. There is no 2D/3D mode pill. Paperclip still owns the seat when the feed disagrees. The topic stays in the browser.

The tower renderer is the wallpaper scene, served from this origin (`/office4d.js`, assets under `/4d/`). The topic is still only in the browser.

## Deploy

No server flag and no image rebuild beyond shipping the static page. Confirm in a browser: Settings shows "Live feed · N bots" without the topic, the usage pill appears after a usage line, and Share still saves a picture with no names or task text.
