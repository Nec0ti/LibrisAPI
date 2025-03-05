# LibrisAPI Security Policy

At LibrisAPI, we are committed to maintaining the highest level of security for our users' data. This document outlines our security policies and how to report security vulnerabilities.

## Supported Versions

| Version | Support Status |
| ------- | -------------- |
| 1.x   | Supported   |
| < 1.0   | Not Supported |

Security updates will only be applied to supported versions.

## Reporting Security Vulnerabilities

If you discover a security vulnerability in LibrisAPI, please report it to us by following these steps:

1.  **Description:** Prepare a detailed report that includes a description of the vulnerability, how to reproduce it, and the potential impact.
2.  **Contact:** Send your report via email to [core@necoti.dev](mailto:core@necoti.dev). Please encrypt your email (e.g., using GPG) and include your public key.
3.  **Confidentiality:** Avoid disclosing the vulnerability publicly. After contacting us, we will work together to resolve the issue and release the necessary updates.

## Security Measures

The following security measures are implemented in LibrisAPI:

*   **Password Hashing:** User passwords are securely hashed using bcryptjs.
*   **JWT (JSON Web Token) Authentication:** Authentication is performed securely using JWT.
*   **Input Validation:** User inputs are validated to prevent potential security vulnerabilities.
*   **HTTPS Usage:** Communication between the API and users is encrypted using the HTTPS protocol.
*   **Dependency Updates:** All dependencies used in the project are regularly updated to patch security vulnerabilities.
*   **Rate Limiting:** Request rates are limited to prevent abuse of the API.

## Disclaimer

LibrisAPI is provided "as is" and without any warranty. We are not responsible for any security breaches or data loss resulting from the use of this project.

## Contact

If you have any security-related questions or concerns, please contact us at [core@necoti.dev](mailto:core@necoti.dev).

This core policy is continuously updated to ensure the core of LibrisAPI. Please check back regularly.
