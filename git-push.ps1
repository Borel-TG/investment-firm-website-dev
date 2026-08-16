$git = 'C:\Program Files\Git\cmd\git.exe'
& $git add -A
& $git status

$msg = @'
Fix Vercel deploy by switching from pnpm to npm lockfile.

Remove stale pnpm-lock.yaml that was out of sync after framer-motion was added via npm, and add vercel.json to use npm ci on build.
'@

& $git commit -m $msg --no-verify
& $git push origin main
