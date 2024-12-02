# Teacher-Student Dashboard Project

## Overview

The Teacher-Student Dashboard is a web application that facilitates interaction between teachers and students for managing lessons, assignments, feedback, and statistics. The application provides a series of web pages for different roles (teachers and students) to streamline their educational activities, including adding lessons, submitting assignments, giving feedback, and viewing performance metrics.

## Features

The project consists of multiple pages tailored for teachers and students:

### Student Pages

1. **student\_dashboard.html** - The main dashboard for students, providing access to lessons, assignments, and feedback.
2. **student\_give\_feedback.html** - Allows students to give feedback on their peers' responses.
3. **student\_submit\_assignment.html** - Enables students to submit assignments related to specific lessons.
4. **student\_view\_grades.html** - Displays grades and comments received by students for their work.

### Teacher Pages

1. **teacher\_dashboard.html** - The main dashboard for teachers, providing an overview of classes and lessons.
2. **teacher\_lessons.html** - Enables teachers to manage, modify, and review lessons.
3. **teacher\_mark\_questions.html** - Allows teachers to mark student responses and provide grades or comments.
4. **teacher\_add\_questions.html** - Lets teachers add new questions to their lessons.
5. **teacher\_review\_questions.html** - Allows teachers to modify the correct answers for various lesson questions.
6. **teacher\_statistics.html** - Displays statistics and charts regarding class performance, participation, and student progress.

## Project Structure

The project is organized as follows:

```
|-- assets/
|   |-- css/                # Stylesheets for the project
|   |-- js/                 # JavaScript files for dynamic functionality
|
|-- student_dashboard.html  # Main dashboard for students
|-- student_give_feedback.html  # Feedback form for students
|-- student_submit_assignment.html  # Assignment submission for students
|-- student_view_grades.html  # Grade viewing page for students
|
|-- teacher_dashboard.html  # Main dashboard for teachers
|-- teacher_lessons.html  # Lesson management for teachers
|-- teacher_mark_questions.html  # Question marking for teachers
|-- teacher_add_questions.html  # Add new questions to lessons
|-- teacher_review_questions.html  # Review and edit correct answers
|-- teacher_statistics.html  # Statistics and performance metrics for teachers
```

## Getting Started

To run the project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/FrancescoScuola/PeerReviewClientWeb.git
   ```
2. **Navigate to the Project Directory**
   ```bash
   cd PeerReviewClientWeb
   ```
3. **Install Certificates for HTTPS**
   To test the app locally with HTTPS, you need to install the necessary certificates.

4. **Use Visual Studio Code with Live Server Extension**
   Open the project in Visual Studio Code and install the "Live Server" extension. Run the application on port 5500 to test it locally.

5. **Open in Browser**
   You can open any of the `.html` files in your browser to preview the pages. We recommend starting with `index.html` to get an overview.

## Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.).
- Basic knowledge of HTML, CSS, and JavaScript.

## Technologies Used

- **HTML/CSS**: For structuring and styling the pages.
- **JavaScript**: For adding interactivity and managing API requests.
- **Bootstrap**: For responsive and modern UI components.
- **Chart.js**: To display interactive charts in the teacher statistics page.

## How to Contribute

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
   ```bash
   git checkout -b feature/my-feature
   ```
3. Commit your changes.
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your fork and submit a pull request.
   ```bash
   git push origin feature/my-feature
   ```

## Issues

Please use the GitHub issues tracker to report bugs or request features. We have organized our tasks into multiple GitHub issues, with tags like `[student]` or `[teacher]` to easily distinguish them.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, feel free to open an issue or contact the repository maintainers.

## Acknowledgements

- **Bootstrap**: For easy and responsive UI development.
- **Chart.js**: For data visualization and charts.
- **Open Source Community**: For inspiration and collaboration.

