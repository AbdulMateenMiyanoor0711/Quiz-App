CREATE TABLE `users` (
  `id` integer PRIMARY KEY,
  `username` varchar(255),
  `role` varchar(255),
  `created_at` timestamp
);

CREATE TABLE `quizattempted` (
  `id` integer PRIMARY KEY,
  `userid` integer,
  `quizid` integer,
  `question` varchar(255),
  `answer_selected` varchar(255)
);

CREATE TABLE `questions` (
  `id` integer PRIMARY KEY,
  `question` varchar(255),
  `option_a` varchar(255),
  `option_b` varchar(255),
  `option_c` varchar(255),
  `option_d` varchar(255),
  `answer` varchar(255)
);

ALTER TABLE `quizattempted` ADD CONSTRAINT `useranswer` FOREIGN KEY (`userid`) REFERENCES `users` (`id`);
