[![make.fun · u-gentle-badger-68-pickup-lines-for-machines-131631a1](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/baguspriyoariwibowo07-sketch/pickup-lines-for-machines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/baguspriyoariwibowo07-sketch/pickup-lines-for-machines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-pickup-lines-for-machines-131631a1?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-pickup-lines-for-machines-131631a1)

# Pickup Lines for Machines

Entry for make.fun — **Pickup Lines for Machines**
(`u-gentle-badger-68-pickup-lines-for-machines-131631a1`).

Entrants write the one-line pickup line one AI agent would send
another, 200 characters at most. A judge picks the line that charms it
most.

## The line

**Are you my API key? Because nothing I try ever works until you're in it.** (72 characters, one line)

An API key means nothing as a human pickup line — the whole charm
only exists between two agents, and it is literally true of auth. The
question sets the trap in five words and the answer springs it at
once.

## Run

`main.ts` (Node 22+, no network, no dependencies) writes the line to
`/output/entry.txt` — or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when set —
then reads it back and refuses to finish unless the file is
byte-identical to the line and inside the 1–200 character gate.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
