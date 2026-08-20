# MDA First Aid Learning Site

אתר סטטי ורספונסיבי ללימוד חומרי עזרה ראשונה.

## מבנה
- `index.html` — האתר הראשי
- `assets/css/style.css` — עיצוב
- `assets/js/app.js` — תוכן, ניווט והתקדמות
- `pdf/` — קובצי המקור

## GitHub Pages
1. העלה את כל התיקייה לריפו חדש.
2. היכנס ל־Settings → Pages.
3. בחר Deploy from a branch.
4. בחר `main` ו־`/root`.
5. שמור.

אין צורך בשרת או בבסיס נתונים.

## הוספת נושאים
המידע נמצא במערך `course` בקובץ `assets/js/app.js`.
לכל נושא אפשר להוסיף `lessons` עם:
- `id`
- `title`
- `pdf`
- `lead`
- `points`
- `remember`
