import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const headerEntries = Object.entries(req.headers || {});
  const mapped = headerEntries.map(([k, v]) => ({ name: k, value: Array.isArray(v) ? v.join(';') : v, length: (Array.isArray(v) ? v.join(';') : v || '').length }));
  const total = mapped.reduce((s, h) => s + h.length + h.name.length, 0);
  res.status(200).json({ method: req.method, totalApproxBytes: total, headers: mapped });
}
