cBe = (r, n, i) => {
  return r.filter(
    a => n[a._id]?.episodes.some(
      l => {
        const c = i[l._id];
        return c &&
          c.watchPosition > (l.duration - (l.endCutout ?? 0)) / 2
      }
    ) && !n[a._id]?.episodes.every(
      e => {
        const b = i[e._id];
        return b && b.watched;
      }
    )
  ).map(
    a => {
      const l = n[a._id];
      return l &&
        (
          l.lastWatched = void 0,
            l.episodes.forEach(
              c => {
                const p = i[c._id];
                if (p) {
                  const d = p.lastWatched;
                  (!l.lastWatched || d > l.lastWatched) &&
                    (l.lastWatched = d)
              }
            }
          )
        ),
        a
    }
  ).sort(
    (a, l) => {
      const c = n[a._id]?.lastWatched?.getTime() ?? Number.MIN_SAFE_INTEGER,
        p = n[l._id]?.lastWatched?.getTime() ?? Number.MIN_SAFE_INTEGER;
      return c > p ? - 1 : c < p ? 1 : 0
    }
  ).slice(0, Math.min(r.length, oBe))
};
