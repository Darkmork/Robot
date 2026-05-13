
# Security Specification - RobotCode Arena

## 1. Data Invariants
- A User profile (`/users/{uid}`) must be created by the authenticated owner.
- Aggregate stats (`totalSolved`, `points`) in `/users/{uid}` can only be updated if the user is authenticated and is the owner.
- Private information (email) is isolated in `/users/{uid}/private/info` and is only accessible by the owner.
- Submissions (`/users/{uid}/submissions/{id}`) are private to the owner.
- Timestamps must be strictly server-validated.

## 2. Dirty Dozen Payloads (Rejection Targets)
1. **Identity Spoofing**: Attempt to create a profile for `UserB` while authenticated as `UserA`.
2. **Point Injection**: Attempt to update `points` directly with a huge value without a valid submission.
3. **Ghost Field**: Attempt to add `isAdmin: true` to a user profile.
4. **PII Leak**: Attempt to read `/users/targetId/private/info` as a different user.
5. **Timestamp Fraud**: Attempt to set `createdAt` back in time.
6. **Relational Sync Failure**: Attempt to create a submission with a mismatched `userId` in the payload vs the path.
7. **Resource Poisoning**: Use a 1MB string for `displayName`.
8. **ID Poisoning**: Use a path like `users/../../../etc/passwd` (guarded by `isValidId`).
9. **Email Spoofing**: Use an unverified email (if `email_verified` is required).
10. **Terminal State Break**: Attempt to change a `success` submission back to `failed`.
11. **Blanket Query Scraping**: Attempt `getDocs(collection(db, 'users'))` to dump all emails (prevented by split collection).
12. **Immutable Swap**: Attempt to change `uid` on an existing user document.

## 3. Test Runner Concept
The rules will be validated to ensure all above payloads return `PERMISSION_DENIED`.
