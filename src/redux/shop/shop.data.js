const SHOP_DATA = [
		{
			id: 1,
			title: 'JavaScript',
			routeName: 'javascript',
			items: [
				{
					id: 1,
					name: 'JavaScript Basics',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 2,
					name: 'JavaScript ES6 ',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 3,
					name: 'JavaScript Data Types',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 4,
					name: 'JavaScipt Objects',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 5,
					name: 'JavaScript Loops',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 6,
					name: 'JavaScript Conditional Statements',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 7,
					name: 'JavaScript Understanding DOM',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 8,
					name: 'JavaScript Debugging',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 9,
					name: 'JavaScript Transitions & Animations',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAk71ykqQeWMTcpicC_-ODj8-2qYm54KBcdB-4-WBpDBiy32j-hjugN0XFgHs5SDsRvEW2woGsZZnzH9vbayMl1q9LwfnKpEYL81q3ldes9khenXL4uGrVQMGCeYtQo5fnlQ8oWt2IFs9AV5zGvrP0kyw3hmFCyV9HWvwL2SrdJI1s7AQdKJL6k4AmwoTHzCmUrG0BDkMCRb7CExg4oeAoc8k68ucYtrgT_GAHFWggN-RwGOiQ0bkaswjZMHeHADLB7Tff1suBBSEkPHmTekt1rpZZH60e84yk9MqSA1DsLsN3gpbHnn_JwdD8VP5ePfXzzLUsZox406kzWG2iU4qsYZ/p.png?fv_content=true&size_mode=5',
					price: 5
				}
			]
		},
		{
			id: 2,
			title: 'Vue.JS',
			routeName: 'vue',
			items: [
				{
					id: 10,
					name: 'Vue Basics',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAn4lZFluW_2DuHzWH7obb0MyUa4S8rShyYJMioM-7r4yLBFyYI22rvmyHbsisj4fivDLT4FZUdmS8KM5A77kNhArG46h5_RaoaJK8DncGaSlqPhUMFXanyHVlZfY2cgRFMxXBwlquzzYF_kbyfncBEr4XcIDxGUtWmaPW5xD8rQRSYZoUyUUePA3BSA6ekgMYFCkqlyMrU4ykv2z1gyUubClfMkxRtcVyoqjzWyzrZR4iQQRrhEOm_3mnHFpaCvAnUw97kAiKZiQ1nKgPKSFoAs0Hkv4lv0UWLIWklfQ_VQ8tjx7qt6F7MPdgmMkoJ25YQP0rzHXA1iteqFZLwZAQAn/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 11,
					name: 'Vue Router',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAn4lZFluW_2DuHzWH7obb0MyUa4S8rShyYJMioM-7r4yLBFyYI22rvmyHbsisj4fivDLT4FZUdmS8KM5A77kNhArG46h5_RaoaJK8DncGaSlqPhUMFXanyHVlZfY2cgRFMxXBwlquzzYF_kbyfncBEr4XcIDxGUtWmaPW5xD8rQRSYZoUyUUePA3BSA6ekgMYFCkqlyMrU4ykv2z1gyUubClfMkxRtcVyoqjzWyzrZR4iQQRrhEOm_3mnHFpaCvAnUw97kAiKZiQ1nKgPKSFoAs0Hkv4lv0UWLIWklfQ_VQ8tjx7qt6F7MPdgmMkoJ25YQP0rzHXA1iteqFZLwZAQAn/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 12,
					name: 'Vue CLI',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAn4lZFluW_2DuHzWH7obb0MyUa4S8rShyYJMioM-7r4yLBFyYI22rvmyHbsisj4fivDLT4FZUdmS8KM5A77kNhArG46h5_RaoaJK8DncGaSlqPhUMFXanyHVlZfY2cgRFMxXBwlquzzYF_kbyfncBEr4XcIDxGUtWmaPW5xD8rQRSYZoUyUUePA3BSA6ekgMYFCkqlyMrU4ykv2z1gyUubClfMkxRtcVyoqjzWyzrZR4iQQRrhEOm_3mnHFpaCvAnUw97kAiKZiQ1nKgPKSFoAs0Hkv4lv0UWLIWklfQ_VQ8tjx7qt6F7MPdgmMkoJ25YQP0rzHXA1iteqFZLwZAQAn/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 13,
					name: 'Vue Directives',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAn4lZFluW_2DuHzWH7obb0MyUa4S8rShyYJMioM-7r4yLBFyYI22rvmyHbsisj4fivDLT4FZUdmS8KM5A77kNhArG46h5_RaoaJK8DncGaSlqPhUMFXanyHVlZfY2cgRFMxXBwlquzzYF_kbyfncBEr4XcIDxGUtWmaPW5xD8rQRSYZoUyUUePA3BSA6ekgMYFCkqlyMrU4ykv2z1gyUubClfMkxRtcVyoqjzWyzrZR4iQQRrhEOm_3mnHFpaCvAnUw97kAiKZiQ1nKgPKSFoAs0Hkv4lv0UWLIWklfQ_VQ8tjx7qt6F7MPdgmMkoJ25YQP0rzHXA1iteqFZLwZAQAn/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 14,
					name: 'Vue Computed Properties',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAn4lZFluW_2DuHzWH7obb0MyUa4S8rShyYJMioM-7r4yLBFyYI22rvmyHbsisj4fivDLT4FZUdmS8KM5A77kNhArG46h5_RaoaJK8DncGaSlqPhUMFXanyHVlZfY2cgRFMxXBwlquzzYF_kbyfncBEr4XcIDxGUtWmaPW5xD8rQRSYZoUyUUePA3BSA6ekgMYFCkqlyMrU4ykv2z1gyUubClfMkxRtcVyoqjzWyzrZR4iQQRrhEOm_3mnHFpaCvAnUw97kAiKZiQ1nKgPKSFoAs0Hkv4lv0UWLIWklfQ_VQ8tjx7qt6F7MPdgmMkoJ25YQP0rzHXA1iteqFZLwZAQAn/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 15,
					name: 'Vue X',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAn4lZFluW_2DuHzWH7obb0MyUa4S8rShyYJMioM-7r4yLBFyYI22rvmyHbsisj4fivDLT4FZUdmS8KM5A77kNhArG46h5_RaoaJK8DncGaSlqPhUMFXanyHVlZfY2cgRFMxXBwlquzzYF_kbyfncBEr4XcIDxGUtWmaPW5xD8rQRSYZoUyUUePA3BSA6ekgMYFCkqlyMrU4ykv2z1gyUubClfMkxRtcVyoqjzWyzrZR4iQQRrhEOm_3mnHFpaCvAnUw97kAiKZiQ1nKgPKSFoAs0Hkv4lv0UWLIWklfQ_VQ8tjx7qt6F7MPdgmMkoJ25YQP0rzHXA1iteqFZLwZAQAn/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 16,
					name: 'Vue and Firebase',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAn4lZFluW_2DuHzWH7obb0MyUa4S8rShyYJMioM-7r4yLBFyYI22rvmyHbsisj4fivDLT4FZUdmS8KM5A77kNhArG46h5_RaoaJK8DncGaSlqPhUMFXanyHVlZfY2cgRFMxXBwlquzzYF_kbyfncBEr4XcIDxGUtWmaPW5xD8rQRSYZoUyUUePA3BSA6ekgMYFCkqlyMrU4ykv2z1gyUubClfMkxRtcVyoqjzWyzrZR4iQQRrhEOm_3mnHFpaCvAnUw97kAiKZiQ1nKgPKSFoAs0Hkv4lv0UWLIWklfQ_VQ8tjx7qt6F7MPdgmMkoJ25YQP0rzHXA1iteqFZLwZAQAn/p.png?fv_content=true&size_mode=5',
					price: 190
				},
				{
					id: 17,
					name: 'Vue Transitions & Animations',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAn4lZFluW_2DuHzWH7obb0MyUa4S8rShyYJMioM-7r4yLBFyYI22rvmyHbsisj4fivDLT4FZUdmS8KM5A77kNhArG46h5_RaoaJK8DncGaSlqPhUMFXanyHVlZfY2cgRFMxXBwlquzzYF_kbyfncBEr4XcIDxGUtWmaPW5xD8rQRSYZoUyUUePA3BSA6ekgMYFCkqlyMrU4ykv2z1gyUubClfMkxRtcVyoqjzWyzrZR4iQQRrhEOm_3mnHFpaCvAnUw97kAiKZiQ1nKgPKSFoAs0Hkv4lv0UWLIWklfQ_VQ8tjx7qt6F7MPdgmMkoJ25YQP0rzHXA1iteqFZLwZAQAn/p.png?fv_content=true&size_mode=5',
					price: 200
				}
			]
		},
		{
			id: 3,
			title: 'React.JS',
			routeName: 'react',
			items: [
				{
					id: 18,
					name: 'React Basics',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAklF59RY_DcX_Sjh2OhqzKHHD_q8VF64N68Z-FewbyZA37NX8HztFKjLuH9OtP5SD7kQBq77KbH5dEZgZfVa18j3SeuriDUb_G5-4XZgw3I1VzQv3HwXM3goMFyvMjny32IweKpWrclqmDsElrw_2NmApRIXsMYpFh4K3X6FpWWq9nApfXdLks2gx1ZwvydorL62BIUjGE6mrE5lR9dLYSuRRJ1TCpOc6fvJqZz9Yc3KspIh8lEDQwl0pkPg9wdDOAD-K2ydRztnnoCLRbd0SrAntmhxJoLqMDy93Woe0CmAbbC3ACjmhpa3E3oVG3sTavSVy_KnHWIKwLDQd2Oxd9W/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 19,
					name: 'React Components',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAklF59RY_DcX_Sjh2OhqzKHHD_q8VF64N68Z-FewbyZA37NX8HztFKjLuH9OtP5SD7kQBq77KbH5dEZgZfVa18j3SeuriDUb_G5-4XZgw3I1VzQv3HwXM3goMFyvMjny32IweKpWrclqmDsElrw_2NmApRIXsMYpFh4K3X6FpWWq9nApfXdLks2gx1ZwvydorL62BIUjGE6mrE5lR9dLYSuRRJ1TCpOc6fvJqZz9Yc3KspIh8lEDQwl0pkPg9wdDOAD-K2ydRztnnoCLRbd0SrAntmhxJoLqMDy93Woe0CmAbbC3ACjmhpa3E3oVG3sTavSVy_KnHWIKwLDQd2Oxd9W/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 20,
					name: 'React Redux',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAklF59RY_DcX_Sjh2OhqzKHHD_q8VF64N68Z-FewbyZA37NX8HztFKjLuH9OtP5SD7kQBq77KbH5dEZgZfVa18j3SeuriDUb_G5-4XZgw3I1VzQv3HwXM3goMFyvMjny32IweKpWrclqmDsElrw_2NmApRIXsMYpFh4K3X6FpWWq9nApfXdLks2gx1ZwvydorL62BIUjGE6mrE5lR9dLYSuRRJ1TCpOc6fvJqZz9Yc3KspIh8lEDQwl0pkPg9wdDOAD-K2ydRztnnoCLRbd0SrAntmhxJoLqMDy93Woe0CmAbbC3ACjmhpa3E3oVG3sTavSVy_KnHWIKwLDQd2Oxd9W/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 21,
					name: 'React Router',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAklF59RY_DcX_Sjh2OhqzKHHD_q8VF64N68Z-FewbyZA37NX8HztFKjLuH9OtP5SD7kQBq77KbH5dEZgZfVa18j3SeuriDUb_G5-4XZgw3I1VzQv3HwXM3goMFyvMjny32IweKpWrclqmDsElrw_2NmApRIXsMYpFh4K3X6FpWWq9nApfXdLks2gx1ZwvydorL62BIUjGE6mrE5lR9dLYSuRRJ1TCpOc6fvJqZz9Yc3KspIh8lEDQwl0pkPg9wdDOAD-K2ydRztnnoCLRbd0SrAntmhxJoLqMDy93Woe0CmAbbC3ACjmhpa3E3oVG3sTavSVy_KnHWIKwLDQd2Oxd9W/p.png?fv_content=true&size_mode=5',
					price: 5
				},
				{
					id: 22,
					name: 'React Hooks',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAklF59RY_DcX_Sjh2OhqzKHHD_q8VF64N68Z-FewbyZA37NX8HztFKjLuH9OtP5SD7kQBq77KbH5dEZgZfVa18j3SeuriDUb_G5-4XZgw3I1VzQv3HwXM3goMFyvMjny32IweKpWrclqmDsElrw_2NmApRIXsMYpFh4K3X6FpWWq9nApfXdLks2gx1ZwvydorL62BIUjGE6mrE5lR9dLYSuRRJ1TCpOc6fvJqZz9Yc3KspIh8lEDQwl0pkPg9wdDOAD-K2ydRztnnoCLRbd0SrAntmhxJoLqMDy93Woe0CmAbbC3ACjmhpa3E3oVG3sTavSVy_KnHWIKwLDQd2Oxd9W/p.png?fv_content=true&size_mode=5',
					price: 5
				}
			]
		},
		{
			id: 4,
			title: 'Full-Stack Courses',
			routeName: 'fullstack',
			items: [
				{
					id: 23,
					name: 'React, Firebase, and GraphQL',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAng81-yTtEt2Cu1-B3avFHYa2Qa4w0zy0V9bKqWbmlxZEDAxbTPGrlTlBbatq2lkzHYd_oHwPl7S2b5EMVIEukWjrmpFkdveI1tCAkrBac0WkEgOnkX22DW8auEOGgXFVIlY2wb7VVbrFNBnDMFAV-TtpTAW9Tdm9R5ZAVqEstAmJfGapR8sW0drxXANmMJfKuUpUI9tvr9-QqW1FH3TEAVJ9Sih1aTDmzTvVMPcy-Tm-lGVcGef8dbySi0u5J1odR3YXv7rr5HNm1NdVRLMra27Y5nP_PvrRAFdKtzLBf4-gA4b3Q5jlBu4KdAHsJyQhMU5B_vSvY14FBXhTq00TmX/p.png?fv_content=true&size_mode=5',
					price: 25
				},
				{
					id: 24,
					name: 'Vue, Node, Express, and Mongo',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAng81-yTtEt2Cu1-B3avFHYa2Qa4w0zy0V9bKqWbmlxZEDAxbTPGrlTlBbatq2lkzHYd_oHwPl7S2b5EMVIEukWjrmpFkdveI1tCAkrBac0WkEgOnkX22DW8auEOGgXFVIlY2wb7VVbrFNBnDMFAV-TtpTAW9Tdm9R5ZAVqEstAmJfGapR8sW0drxXANmMJfKuUpUI9tvr9-QqW1FH3TEAVJ9Sih1aTDmzTvVMPcy-Tm-lGVcGef8dbySi0u5J1odR3YXv7rr5HNm1NdVRLMra27Y5nP_PvrRAFdKtzLBf4-gA4b3Q5jlBu4KdAHsJyQhMU5B_vSvY14FBXhTq00TmX/p.png?fv_content=true&size_mode=5',
					price: 20
				},
				{
					id: 25,
					name: 'Angular, Node, and Firebase',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAng81-yTtEt2Cu1-B3avFHYa2Qa4w0zy0V9bKqWbmlxZEDAxbTPGrlTlBbatq2lkzHYd_oHwPl7S2b5EMVIEukWjrmpFkdveI1tCAkrBac0WkEgOnkX22DW8auEOGgXFVIlY2wb7VVbrFNBnDMFAV-TtpTAW9Tdm9R5ZAVqEstAmJfGapR8sW0drxXANmMJfKuUpUI9tvr9-QqW1FH3TEAVJ9Sih1aTDmzTvVMPcy-Tm-lGVcGef8dbySi0u5J1odR3YXv7rr5HNm1NdVRLMra27Y5nP_PvrRAFdKtzLBf4-gA4b3Q5jlBu4KdAHsJyQhMU5B_vSvY14FBXhTq00TmX/p.png?fv_content=true&size_mode=5',
					price: 80
				},
				{
					id: 26,
					name: 'Python and DJango',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAng81-yTtEt2Cu1-B3avFHYa2Qa4w0zy0V9bKqWbmlxZEDAxbTPGrlTlBbatq2lkzHYd_oHwPl7S2b5EMVIEukWjrmpFkdveI1tCAkrBac0WkEgOnkX22DW8auEOGgXFVIlY2wb7VVbrFNBnDMFAV-TtpTAW9Tdm9R5ZAVqEstAmJfGapR8sW0drxXANmMJfKuUpUI9tvr9-QqW1FH3TEAVJ9Sih1aTDmzTvVMPcy-Tm-lGVcGef8dbySi0u5J1odR3YXv7rr5HNm1NdVRLMra27Y5nP_PvrRAFdKtzLBf4-gA4b3Q5jlBu4KdAHsJyQhMU5B_vSvY14FBXhTq00TmX/p.png?fv_content=true&size_mode=5',
					price: 80
				},
				{
					id: 27,
					name: 'JavaScript, Node, HTML, SQL and CSS',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAng81-yTtEt2Cu1-B3avFHYa2Qa4w0zy0V9bKqWbmlxZEDAxbTPGrlTlBbatq2lkzHYd_oHwPl7S2b5EMVIEukWjrmpFkdveI1tCAkrBac0WkEgOnkX22DW8auEOGgXFVIlY2wb7VVbrFNBnDMFAV-TtpTAW9Tdm9R5ZAVqEstAmJfGapR8sW0drxXANmMJfKuUpUI9tvr9-QqW1FH3TEAVJ9Sih1aTDmzTvVMPcy-Tm-lGVcGef8dbySi0u5J1odR3YXv7rr5HNm1NdVRLMra27Y5nP_PvrRAFdKtzLBf4-gA4b3Q5jlBu4KdAHsJyQhMU5B_vSvY14FBXhTq00TmX/p.png?fv_content=true&size_mode=5',
					price: 45
				},
				{
					id: 28,
					name: 'Laravel and Vue',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAng81-yTtEt2Cu1-B3avFHYa2Qa4w0zy0V9bKqWbmlxZEDAxbTPGrlTlBbatq2lkzHYd_oHwPl7S2b5EMVIEukWjrmpFkdveI1tCAkrBac0WkEgOnkX22DW8auEOGgXFVIlY2wb7VVbrFNBnDMFAV-TtpTAW9Tdm9R5ZAVqEstAmJfGapR8sW0drxXANmMJfKuUpUI9tvr9-QqW1FH3TEAVJ9Sih1aTDmzTvVMPcy-Tm-lGVcGef8dbySi0u5J1odR3YXv7rr5HNm1NdVRLMra27Y5nP_PvrRAFdKtzLBf4-gA4b3Q5jlBu4KdAHsJyQhMU5B_vSvY14FBXhTq00TmX/p.png?fv_content=true&size_mode=5',
					price: 135
				},
				{
					id: 29,
					name: 'Spring and Angular',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAng81-yTtEt2Cu1-B3avFHYa2Qa4w0zy0V9bKqWbmlxZEDAxbTPGrlTlBbatq2lkzHYd_oHwPl7S2b5EMVIEukWjrmpFkdveI1tCAkrBac0WkEgOnkX22DW8auEOGgXFVIlY2wb7VVbrFNBnDMFAV-TtpTAW9Tdm9R5ZAVqEstAmJfGapR8sW0drxXANmMJfKuUpUI9tvr9-QqW1FH3TEAVJ9Sih1aTDmzTvVMPcy-Tm-lGVcGef8dbySi0u5J1odR3YXv7rr5HNm1NdVRLMra27Y5nP_PvrRAFdKtzLBf4-gA4b3Q5jlBu4KdAHsJyQhMU5B_vSvY14FBXhTq00TmX/p.png?fv_content=true&size_mode=5',
					price: 20
				}
			]
		},
		{
			id: 5,
			title: 'Programming T-Shirts',
			routeName: 'tshirts',
			items: [
				{
					id: 31,
					name: 'Coffee and Code',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAmIGkGcCbbCNBOdqz2UmlohIl8EUK0s4l9ZnFK_JUbAh7uiIr0gvBFHWHPgza0_FgozqfaA6giT7bew1Pa6tNO1s6_vlmhsFMdfyuXwJNPe75rIOJ-hHzaMOKyTioNyXlZv2MAHosXbfvL4eDnj73t-3mMOTRTsG8XIEtYo4K0H5pSZL1GZsNKFFz2q95qbIaWS-2TcbOIET-i51VZCS5-97ndWppAZi9SriphyZ0M1xqQ9twQjzxL4uE2BzClcT7YuqZvkoPo6Qlw55BS0avEh25ngnMwKnb3R2vlCj9KAhJXy6dHNH9mNEVayCZ0oTS3TXRyeLoVaUITKyg7_-BWS/p.png?fv_content=true&size_mode=5',
					price: 20
				},
				{
					id: 32,
					name: 'Coderality',
					imageUrl: 'https://previews.dropbox.com/p/thumb/AAmIGkGcCbbCNBOdqz2UmlohIl8EUK0s4l9ZnFK_JUbAh7uiIr0gvBFHWHPgza0_FgozqfaA6giT7bew1Pa6tNO1s6_vlmhsFMdfyuXwJNPe75rIOJ-hHzaMOKyTioNyXlZv2MAHosXbfvL4eDnj73t-3mMOTRTsG8XIEtYo4K0H5pSZL1GZsNKFFz2q95qbIaWS-2TcbOIET-i51VZCS5-97ndWppAZi9SriphyZ0M1xqQ9twQjzxL4uE2BzClcT7YuqZvkoPo6Qlw55BS0avEh25ngnMwKnb3R2vlCj9KAhJXy6dHNH9mNEVayCZ0oTS3TXRyeLoVaUITKyg7_-BWS/p.png?fv_content=true&size_mode=5',
					price: 25
				}
			]
		}
	];
	
	export default SHOP_DATA;