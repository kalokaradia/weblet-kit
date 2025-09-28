# Documentation

## 📦 Installation

Install via [npm](https://www.npmjs.com/package/weblet-kit):

```bash
npm install weblet-kit
```

or you can use it via [CDN](https://unpkg.com/weblet-kit):

```js
import webletKit, {utils, validators} from "https://unpkg.com/weblet-kit";
```

## 🚀 Usage

Import and use any utility you need:

```js
import { validators, utils } from 'weblet-kit';

console.log(validators.isEmail('test@example.com')); // true

const debouncedFn = utils.debounce(() => console.log('Hello!'), 300);
debouncedFn();
```

## 📖 Documentation

### 🔍 Validators

- **isEmail(email: string): boolean**  
  ✅ Cek apakah string valid sebagai email.

- **isURL(url: string): boolean**  
  🌐 Validasi URL dengan `new URL()`.

- **isUUID(uuid: string): boolean**  
  🆔 Periksa apakah string sesuai format UUID v4.

- **isStrongPassword(password: string): boolean**  
  🔒 Password ≥8 karakter, ada huruf besar, kecil, angka, dan simbol.

- **isNumber(value: any): boolean**  
  🔢 Cek apakah nilai bertipe number dan bukan NaN.

- **isInteger(value: any): boolean**  
  🧮 Cek apakah nilai integer.

- **isBoolean(value: any): boolean**  
  ⚖️ Nilai `true/false` (termasuk string `"true"` / `"false"`).

- **isDate(value: any): boolean**  
  📅 Validasi Date object, string tanggal, atau timestamp number.

- **isEmpty(value: any): boolean**  
  🕳️ Cek apakah null, string kosong, array kosong, atau object kosong.

- **isAlphanumeric(value: string): boolean**  
  🔡 Cek apakah string hanya berisi huruf dan angka.

---

### 🛠️ Utils

- **formatDate(date: Date, format?: string): string**  
  ⏰ Format tanggal (`YYYY-MM-DD HH:mm:ss`).

- **generateRandomId(length?: number): string**  
  🎲 Random string (default 16 karakter).

- **capitalize(text: string): string**  
  ✨ Huruf pertama jadi kapital.

- **escapeHTML(text: string): string**  
  🛡️ Escape karakter spesial ke HTML entities.

- **debounce(fn: Function, delay: number): Function**  
  ⏳ Jalankan fungsi setelah berhenti dipanggil beberapa ms.

- **throttle(fn: Function, delay: number): Function**  
  🚦 Batasi fungsi agar hanya jalan tiap interval tertentu.

- **shuffleArray(arr: any[]): any[]**  
  🔀 Acak isi array.

- **average(arr: number[]): number**  
  ➗ Hitung rata-rata array angka.

- **max(arr: number[]): number | undefined**  
  📈 Ambil nilai terbesar.

- **min(arr: number[]): number | undefined**  
  📉 Ambil nilai terkecil.

- **sortNumbers(arr: number[]): number[]**  
  📊 Urutkan angka ascending.

- **isPalindrome(text: string): boolean**  
  🔄 Cek apakah teks palindrome.
