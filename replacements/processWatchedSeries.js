m$e = (i, t, r) => {
  return i.filter(
    a => t[a._id]?.episodes.some(l => {
      const c = r[l._id];
      return c &&
        c.watchPosition > P0(l) / 2
    }) && !t[a._id]?.episodes.every(
      e => {
        const b = r[e._id];
        return b && b.watched;
      }
    )
  ).map(
    a => {
      const l = t[a._id];
      return l &&
        (
          l.lastWatched = void 0,
            l.episodes.forEach(
              c => {
                const h = r[c._id];
                if (h) {
                  const d = h.lastWatched;
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
      const c = t[a._id]?.lastWatched?.getTime() ?? Number.MIN_SAFE_INTEGER,
        h = t[l._id]?.lastWatched?.getTime() ?? Number.MIN_SAFE_INTEGER;
      return c > h ? - 1 : c < h ? 1 : 0
    }
  ).slice(0, Math.min(i.length, f$e))
}
