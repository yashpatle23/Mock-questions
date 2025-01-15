# Mock Test Application

This is a Mock Test Application that allows users to register, log in, take quizzes, and view their scores. The application is built using HTML, CSS, JavaScript, and PHP, and uses MySQL for the database.

## Deployment

This application is deployed at [http://mockquestions.rf.gd](http://mockquestions.rf.gd) with the help of [infinityfree.com](https://infinityfree.com/). For detailed deployment instructions, refer to this [video tutorial](https://www.youtube.com/watch?v=RTO8uM7GeS8&ab_channel=Training%40DigiCoders).

## Features

- User Registration
- User Login
- Take Quizzes
- View Scores
- Responsive Design

## Setup Instructions

### Prerequisites

- XAMPP or any other local server environment
- Web browser
- phpMyAdmin

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yashpatle23/Mock-questions.git
   ```

2. **Move the project to the XAMPP `htdocs` directory:**
   ```bash
   mv mock-questions /c/xampp/htdocs/
   ```

3. **Start the XAMPP server:**
   - Open the XAMPP Control Panel.
   - Start the Apache and MySQL modules.

4. **Create the database:**
   - Open phpMyAdmin.
   - Create a new database named `mock_test_db`.

5. **Import the database:**
   - Select the `mock_test_db` database.
   - Click on the "Import" tab.
   - Choose the SQL file provided in the repository (`mock_test_db.sql`).
   - Click "Go" to import the database.

   The SQL file for the database is provided in the repository with the name `mock_test_db.sql`.

6. **Access the application:**
   - Open a web browser.
   - Navigate to `http://localhost/mock-test-application/index.html`.

### File Structure

- `index.html`: The main page of the application.
- `register.html`: The registration page.
- `login.html`: The login page.
- `scores.php`: The page to view user scores.
- `register.php`: The PHP script to handle user registration.
- `login.php`: The PHP script to handle user login.
- `save_score.php`: The PHP script to save user scores.
- `logout.php`: The PHP script to handle user logout.
- `style.css`: The main stylesheet for the application.
- `register.css`: The stylesheet for the registration page.
- `login.css`: The stylesheet for the login page.
- `script.js`: The main JavaScript file for the application.

### Usage

1. **Register a new user:**
   - Go to the registration page (`register.html`).
   - Fill in the required details and submit the form.

2. **Log in:**
   - Go to the login page (`login.html`).
   - Enter your username and password and submit the form.

3. **Take a quiz:**
   - After logging in, click on the "Start Test" button on the main page.
   - Follow the instructions and answer the questions.

4. **View scores:**
   - After completing the quiz, your score will be saved.
   - Go to the scores page (`scores.php`) to view your scores.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

### Contact

For any questions or feedback, please contact [yashpatle.job@gmail.com](mailto:yashpatle.job@gmail.com).
