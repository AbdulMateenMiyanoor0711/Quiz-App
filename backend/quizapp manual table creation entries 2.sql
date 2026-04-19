use  quiz_app;

CREATE TABLE quiz_attempt (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    quiz_category_id INT,
    score INT DEFAULT 0,
    total_questions INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    FOREIGN KEY (quiz_category_id)
        REFERENCES quiz_category(id)
        ON DELETE CASCADE
);
