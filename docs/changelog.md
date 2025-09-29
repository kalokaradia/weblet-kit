# Changelog

All notable changes to **Weblet-Kit** will be documented in this file.  
This project adheres to [Semantic Versioning](https//semver.org/).

---

## [1.2.0] - 2025-09-29

### Added

#### Validators

-   `isAlpha` → Checks if a string contains only alphabetic characters (a–z, A–Z).
-   `isNumeric` → Checks if a string contains only numeric digits (0–9).
-   `isHexColor` → Checks if a string is a valid hex color code (e.g., `#fff`, `#ffffff`).
-   `isJSON` → Checks if a string is valid JSON that can be parsed.
-   `isIP` → Checks if a string is a valid IP address (IPv4 or IPv6).
-   `isDomain` → Checks if a string is a valid domain name (e.g., `example.com`).
-   `isPhoneNumber` → Checks if a string matches a phone number pattern (basic regex, region-agnostic).
-   `isCreditCard` → Checks if a string is a valid credit card number using the Luhn algorithm.
-   `isFutureDate` → Checks if a given date is in the future.
-   `isPastDate` → Checks if a given date is in the past.
-   `isBefore` → Checks if one date occurs before another date.
-   `isAfter` → Checks if one date occurs after another date.

#### Utils

-   `chunkArray` → Splits an array into smaller chunks of a specified size.
-   `deepClone` → Creates a deep copy of an object/array, fully independent of the original.
-   `range` → Generates an array of numbers between a start and end value, with an optional step.

---

## [1.1.0] - 2025-09-28

### Added

#### Validators

-   `isNumber` → Checks if a value is a valid number (excluding `NaN`).
-   `isInteger` → Validates whether a value is an integer.
-   `isBoolean` → Returns `true` if the value is a boolean type or the string `"true"`/`"false"`.
-   `isDate` → Validates if a value is a valid `Date` object, a date string, or a timestamp.
-   `isEmpty` → Checks if the value is empty. Works for `null`, `undefined`, empty strings, arrays, or objects with no keys.
-   `isAlphanumeric` → Validates if a string only contains letters and numbers (`a-z`, `A-Z`, `0-9`).

#### Utils

-   `shuffleArray` → Randomly shuffles the elements of an array.
-   `average` → Returns the average value of a numeric array.
-   `max` → Returns the maximum value from a numeric array.
-   `min` → Returns the minimum value from a numeric array.
-   `sortNumbers` → Sorts an array of numbers in ascending order.
-   `isPalindrome` → Checks if a string is a palindrome (ignores case and non-alphanumeric characters).

---

## [1.0.0] - 2025-09-08

### Initial Release

#### Validators

-   `isEmail` → Validate email addresses.
-   `isURL` → Check if a string is a valid URL.
-   `isUUID` → Validate UUID v1–v5.
-   `isStrongPassword` → Check password strength (length, uppercase/lowercase, digits, symbols).

#### Utils

-   `formatDate` → Format dates with flexible patterns (YYYY-MM-DD HHmmss).
-   `generateRandomId` → Generate alphanumeric random IDs (default 16 chars).
-   `capitalize` → Capitalize the first letter of a string.
-   `escapeHTML` → Escape dangerous characters (< > & " ') for safe HTML output.
-   `debounce` → Delay function execution until inactivity.
-   `throttle` → Limit function execution to a fixed interval.

Distributed as **zero-dependency**, **ESM-ready** JavaScript toolkit.  
Available via `npm` and `unpkg` CDN.
