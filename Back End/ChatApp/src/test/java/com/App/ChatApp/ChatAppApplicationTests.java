package com.App.ChatApp;

import com.App.ChatApp.dao.ChatIndividualRepository;
import com.App.ChatApp.dao.ContactRepository;
import com.App.ChatApp.dao.ConversationRepository;
import com.App.ChatApp.entity.ChatIndividual;
import com.App.ChatApp.entity.Contact;
import com.App.ChatApp.entity.Conversation;
import com.App.ChatApp.entity.User;
import com.App.ChatApp.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class ChatAppApplicationTests {

	@Autowired
	private UserService userService;
	@Autowired
	private ConversationRepository conversationRepository;


	@Autowired
	private ChatIndividualRepository chatIndividualRepository;


	@Autowired
	private ContactRepository contactRepository;




	@Test
	void contextLoads() {

		for (ChatIndividual con : chatIndividualRepository.findAll()){


			System.out.println(con);



		}




	}



	@Test
	void contextLoads2() {

		for (ChatIndividual con : chatIndividualRepository
				.findAllByUserReceiver_IdOrUserSender_Id(17L,17L)){


			System.out.println(con.getChatHistory());

		}

	}




	@Test
	void contextLoads3() {

	 User u = userService.getUserById(17L);

		System.out.println(u.getGroupsList());

	}

}
