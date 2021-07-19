

INSERT INTO `profile` (`id`, `age`, `bio`, `first_name`, `image`, `last_name`, `phone_number`, `status`) VALUES
(1, 23, 'bio bio bio bio bio bio bio bio bio bio bio bio', 'mohamed', 'image med', 'aitibimah', '06', 'active'),
(2, 23, 'bio bio bio bio bio bio bio bio bio bio bio bio', 'ali', 'image med', 'aitibimah', '06', 'active'),
(3, 23, 'bio bio bio bio bio bio bio bio bio bio bio bio', 'said', 'image med', 'aitibimah', '06', 'active'),
(4, 23, 'bio bio bio bio bio bio bio bio bio bio bio bio', 'rachid', 'image med', 'aitibimah', '06', 'active'),
(5, 23, 'bio bio bio bio bio bio bio bio bio bio bio bio', 'amal', 'image med', 'aitibimah', '06', 'active'),
(6, 23, 'bio bio bio bio bio bio bio bio bio bio bio bio', 'fati', 'image med', 'aitibimah', '06', 'active'),
(7, 23, 'bio here', 'med', 'image', 'said', '06', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `user`

-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `active`, `email`, `password`, `user_name`, `verified`, `profile_id`) VALUES
(1, b'1', 'email@gmail.com', '1234', 'username1', b'1', 1),
(2, b'1', 'email@gmail.com', '1234', 'username2', b'1', 2),
(3, b'1', 'email@gmail.com', '1234', 'username3', b'1', 3),
(4, b'1', 'email@gmail.com', '1234', 'username4', b'1', 4),
(5, b'1', 'email@gmail.com', '1234', 'username5', b'1', 5),
(6, b'1', 'email@gmail.com', '1234', 'username6', b'1', 6),
(7, b'1', 'email@gmail.com', '1234', 'username7', b'1', 7);

--
-- Indexes for dumped tables
--

-



INSERT INTO `category` (`id`, `name`) VALUES
(1, 'cat1');


INSERT INTO `chat_group` (`description`, `is_active`, `name_group`, `id`, `category_id`, `owner_id`) VALUES
('grop 1', b'1', 'Testgrop', 4, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `chat_history`
--



INSERT INTO `chat_history` (`id`) VALUES
(1),
(2),
(3),
(4),
(5),
(6);

-- --------------------------------------------------------

--
-- Table structure for table `chat_individual`
--


-- Dumping data for table `chat_individual`
--

INSERT INTO `chat_individual` (`id`, `user_receiver_id`, `user_sender_id`) VALUES
(1, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `blocked`, `name`, `contact`) VALUES
(1, b'0', 'mohamed', 1),
(2, b'0', 'mohamed2', 2),
(3, b'0', 'mohamed3', 3),
(4, b'0', 'mohamed3', 4),
(5, b'0', 'mohamed4', 5),
(6, b'0', 'mohamed5', 6),
(7, b'0', 'mohamed6', 7);

-- --------------------------------------------------------

--
-- Table structure for table `conversation`
--

--
-- Dumping data for table `conversation`
--

INSERT INTO `conversation` (`id`, `last_seen`, `status`) VALUES
(1, '2021-06-01 22:28:24.000000', 'seen'),
(2, '2021-06-16 22:33:39.000000', 'seen'),
(3, '2021-06-08 22:28:24.000000', 'seen'),
(4, '2021-06-17 22:33:39.000000', 'seen');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

-- Dumping data for table `hibernate_sequence`
--
-----------------------------------------

--
-- Table structure for table `message`
--

-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `chat_history_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(15, 1),
(17, 1),
(19, 1),
(21, 1),
(23, 1),
(25, 1),
(27, 1),
(29, 1),
(31, 1),
(33, 1),
(35, 1),
(14, 2),
(16, 2),
(18, 2),
(20, 2),
(22, 2),
(24, 2),
(26, 2),
(28, 2),
(30, 2),
(32, 2),
(34, 2),
(36, 2);

-- --------------------------------------------------------

INSERT INTO `message_media` (`media`, `type`, `id`) VALUES
('media', 'image', 1),
('media2', 'image', 2),
('media3', 'image', 3),
('media4', 'image', 4),
('media5', 'image', 5),
('media6', 'image', 6),
('media7', 'image', 7);

-- --------------------------------------------------------

--
-- Table structure for table `message_text`
--

--
-- Dumping data for table `message_text`
--

INSERT INTO `message_text` (`text`, `id`) VALUES
('some content', 24),
('some content25', 25),
('some content26', 26),
('some content27', 27),
('some content28', 28);

-- --------------------------------------------------------

--
-- Table structure for table `profile`

-- Dumping data for table `profile`
--
