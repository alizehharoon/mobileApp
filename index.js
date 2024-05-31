const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());



const recipes = [
  {
    "meal_name": "Butter Chicken",
    "prep_time": "1 hour",
    "rating": "4.7",
    "ingredients": [
      "500g chicken breast, cubed",
      "1 cup yogurt",
      "2 tbsp lemon juice",
      "2 tsp garam masala",
      "2 tsp turmeric",
      "2 tsp ground cumin",
      "2 tsp paprika",
      "2 tbsp butter",
      "1 large onion, finely chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "400g tomato puree",
      "1 cup heavy cream",
      "Salt to taste",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Marinate the chicken with yogurt, lemon juice, garam masala, turmeric, cumin, and paprika for at least 30 minutes.",
      "Heat butter in a large skillet over medium heat. Cook onions until soft.",
      "Add garlic and ginger, and cook for 1 minute.",
      "Add marinated chicken and cook until no longer pink.",
      "Stir in tomato puree and cream. Simmer for 20 minutes.",
      "Season with salt. Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=18oC4mmHHX0&pp=ygUVYnV0dGVyIGNoaWNrZW4gcmVjaXBl"
  },
  {
    "meal_name": "Palak Paneer",
    "prep_time": "45 minutes",
    "rating": "4.6",
    "ingredients": [
      "500g fresh spinach",
      "200g paneer, cubed",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1 tsp garam masala",
      "1/2 tsp turmeric",
      "1/2 cup heavy cream",
      "Salt to taste",
      "2 tbsp oil"
    ],
    "recipe": [
      "Blanch spinach in boiling water for 2 minutes. Drain and blend into a puree.",
      "Heat oil in a pan. Fry paneer cubes until golden and set aside.",
      "In the same pan, add cumin seeds. When they splutter, add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, turmeric, and salt. Cook until tomatoes are soft.",
      "Stir in spinach puree and cook for 5 minutes.",
      "Add paneer cubes and cream. Simmer for another 5 minutes.",
      "Sprinkle garam masala on top before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=BTI6RggETEQ&pp=ygUTcGFsYWsgcGFuZWVyIHJlY2lwZQ%3D%3D"
  },
  {
    "meal_name": "Aloo Gobi",
    "prep_time": "40 minutes",
    "rating": "4.5",
    "ingredients": [
      "2 large potatoes, cubed",
      "1 medium cauliflower, cut into florets",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp garam masala",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Heat oil in a large pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, turmeric, ground cumin, and ground coriander. Cook until tomatoes are soft.",
      "Add potatoes and cauliflower. Stir well to coat with the spices.",
      "Cover and cook on low heat until vegetables are tender, about 20 minutes.",
      "Season with salt and sprinkle garam masala on top.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=rIdf_tcuB0Y&pp=ygUIYWx1IGdvYmk%3D"
  },
  {
    "meal_name": "Chana Masala",
    "prep_time": "50 minutes",
    "rating": "4.8",
    "ingredients": [
      "2 cups chickpeas, cooked",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "1 tsp chili powder",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, ground cumin, ground coriander, turmeric, and chili powder. Cook until tomatoes are soft.",
      "Add cooked chickpeas and a little water. Simmer for 15 minutes.",
      "Season with salt and stir in garam masala.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=81qLj6Odfgs&pp=ygUMY2hhbmEgbWFzYWxh"
  },
  {
    "meal_name": "Dal Tadka",
    "prep_time": "40 minutes",
    "rating": "4.7",
    "ingredients": [
      "1 cup yellow lentils (toor dal)",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1 tsp mustard seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp garam masala",
      "Salt to taste",
      "2 tbsp ghee or oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Cook lentils in a pressure cooker until soft.",
      "Heat ghee in a pan. Add cumin and mustard seeds. Let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, turmeric, ground cumin, and ground coriander. Cook until tomatoes are soft.",
      "Add cooked lentils and a little water. Simmer for 10 minutes.",
      "Season with salt and stir in garam masala.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=XzKkkMdo7Jk&pp=ygUKZGFhbCB0YWRrYQ%3D%3D"
  },
  {
    "meal_name": "Bhindi Masala",
    "prep_time": "35 minutes",
    "rating": "4.5",
    "ingredients": [
      "500g okra (bhindi), chopped",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp garam masala",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, turmeric, ground cumin, and ground coriander. Cook until tomatoes are soft.",
      "Add okra and cook on low heat until tender, about 15 minutes.",
      "Season with salt and sprinkle garam masala on top.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=P69JKdN7w7w&pp=ygUNYmhpbmRpIG1hc2FsYQ%3D%3D"
  },
  {
    "meal_name": "Kadai Paneer",
    "prep_time": "45 minutes",
    "rating": "4.6",
    "ingredients": [
      "200g paneer, cubed",
      "1 large onion, sliced",
      "1 green bell pepper, sliced",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp garam masala",
      "1/2 tsp red chili powder",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, turmeric, ground cumin, ground coriander, and red chili powder. Cook until tomatoes are soft.",
      "Add bell pepper and cook for 5 minutes.",
      "Add paneer cubes and cook for another 5 minutes.",
      "Season with salt and sprinkle garam masala on top.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=nRPmoioNisI&pp=ygUNa2FyaGFpIHBhbmVlcg%3D%3D"
  },
  {
    "meal_name": "Pav Bhaji",
    "prep_time": "50 minutes",
    "rating": "4.8",
    "ingredients": [
      "4 potatoes, boiled and mashed",
      "1 cup green peas, boiled",
      "2 large onions, finely chopped",
      "2 tomatoes, chopped",
      "1 green bell pepper, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp red chili powder",
      "1 tbsp pav bhaji masala",
      "Salt to taste",
      "2 tbsp butter",
      "Fresh cilantro for garnish",
      "Pav buns"
    ],
    "recipe": [
      "Heat butter in a large pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, bell pepper, turmeric, ground cumin, ground coriander, red chili powder, and pav bhaji masala. Cook until tomatoes are soft.",
      "Add mashed potatoes and green peas. Mix well and cook for 10 minutes.",
      "Season with salt and garnish with fresh cilantro.",
      "Serve hot with toasted pav buns."
    ],
    "video_url": "https://www.youtube.com/watch?v=qMAYG-soxhw&pp=ygUKcGF2IGJoYWFqaQ%3D%3D"
  },
  {
    "meal_name": "Matar Paneer",
    "prep_time": "45 minutes",
    "rating": "4.7",
    "ingredients": [
      "200g paneer, cubed",
      "1 cup green peas",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp garam masala",
      "1/2 tsp red chili powder",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, turmeric, ground cumin, ground coriander, and red chili powder. Cook until tomatoes are soft.",
      "Add green peas and cook for 5 minutes.",
      "Add paneer cubes and cook for another 5 minutes.",
      "Season with salt and sprinkle garam masala on top.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=ZknwxYH8g2A&pp=ygUMbWF0ZXIgcGFuZWVy"
  },
  {
    "meal_name": "Pani Puri",
    "prep_time": "1 hour",
    "rating": "5",
    "ingredients": [
      "2 cups semolina",
      "1/4 cup all-purpose flour",
      "1/4 tsp baking soda",
      "Water for dough",
      "Oil for frying",
      "1 cup boiled chickpeas",
      "1 cup boiled potatoes, cubed",
      "1 cup tamarind chutney",
      "1 cup mint-coriander chutney",
      "1 tsp chaat masala",
      "Salt to taste",
      "4 cups cold water",
      "1 tbsp black salt"
    ],
    "recipe": [
      "Mix semolina, all-purpose flour, and baking soda. Add water and knead into a stiff dough.",
      "Roll out small puris and deep fry until golden and crisp.",
      "Mix chickpeas, potatoes, chaat masala, and salt.",
      "Prepare spicy water by mixing mint-coriander chutney, black salt, and cold water.",
      "Serve puris with chickpea mixture, tamarind chutney, and spicy water."
    ],
    "video_url": "https://www.youtube.com/watch?v=Y1dbWOQkL-A&pp=ygUQcGFuaSBwdXJpIHJlY2lwZQ%3D%3D"
  },
  {
    "meal_name": "Rajma",
    "prep_time": "1 hour",
    "rating": "4.6",
    "ingredients": [
      "2 cups kidney beans, soaked overnight",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp garam masala",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Cook kidney beans in a pressure cooker until soft.",
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, turmeric, ground cumin, and ground coriander. Cook until tomatoes are soft.",
      "Add cooked kidney beans and a little water. Simmer for 20 minutes.",
      "Season with salt and stir in garam masala.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=M_ncAJhIaIU&pp=ygUFcmFqbWE%3D"
  },
  {
    "meal_name": "Chicken Karahi",
    "prep_time": "1 hour",
    "rating": "4.8",
    "ingredients": [
      "1 kg chicken, cut into pieces",
      "2 large onions, thinly sliced",
      "3 tomatoes, chopped",
      "4 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp garam masala",
      "Salt to taste",
      "1/2 cup oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Heat oil in a karahi (wok). Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, turmeric, ground cumin, and ground coriander. Cook until tomatoes are soft.",
      "Add chicken pieces and cook until they are no longer pink.",
      "Cover and simmer on low heat for 30 minutes.",
      "Season with salt and stir in garam masala.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=XDYNofJ1zI8&pp=ygUGa2FyaGFp"
  },
  {
    "meal_name": "Lamb Korma",
    "prep_time": "1 hour 30 minutes",
    "rating": "4.7",
    "ingredients": [
      "1 kg lamb, cut into pieces",
      "2 large onions, thinly sliced",
      "1 cup yogurt",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp garam masala",
      "1/2 cup almond paste",
      "Salt to taste",
      "1/2 cup oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Marinate lamb with yogurt, garlic, ginger, and spices for at least 1 hour.",
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add marinated lamb and cook until browned on all sides.",
      "Add almond paste and cook for 5 minutes.",
      "Cover and simmer on low heat for 1 hour, stirring occasionally.",
      "Season with salt and sprinkle garam masala on top.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=p-BqgPKHDfw&pp=ygULbGFtYiBrb3JtYWk%3D"
  },
  {
    "meal_name": "Baingan Bharta",
    "prep_time": "1 hour",
    "rating": "4.5",
    "ingredients": [
      "2 large eggplants",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Roast the eggplants over an open flame until the skin is charred. Peel and mash the pulp.",
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, turmeric, ground cumin, and ground coriander. Cook until tomatoes are soft.",
      "Add mashed eggplant and cook for 10 minutes, stirring occasionally.",
      "Season with salt.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=mT8W0IeFNgw&pp=ygUOYmFpbmdhbiBiaGFydGE%3D"
  },
  {
    "meal_name": "Shahi Paneer",
    "prep_time": "1 hour",
    "rating": "4.8",
    "ingredients": [
      "200g paneer, cubed",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 cup heavy cream",
      "1/2 cup almond paste",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, turmeric, ground cumin, and ground coriander. Cook until tomatoes are soft.",
      "Add almond paste and cook for 5 minutes.",
      "Add paneer cubes and cook for another 5 minutes.",
      "Stir in heavy cream and simmer for 10 minutes.",
      "Season with salt.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=-ynEYm7FPNI&pp=ygUUY2hvbGUgYmhhdHVyZSByZWNpcGU%3D"
  },
  {
    "meal_name": "Chole Bhature",
    "prep_time": "1 hour 30 minutes",
    "rating": "4.8",
    "ingredients": [
      "2 cups chickpeas, soaked overnight",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp garam masala",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh cilantro for garnish",
      "3 cups all-purpose flour",
      "1/2 cup yogurt",
      "1/2 tsp baking soda",
      "Oil for frying"
    ],
    "recipe": [
      "Cook chickpeas in a pressure cooker until soft.",
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, turmeric, ground cumin, and ground coriander. Cook until tomatoes are soft.",
      "Add cooked chickpeas and a little water. Simmer for 20 minutes.",
      "Season with salt and stir in garam masala.",
      "Garnish with fresh cilantro before serving.",
      "Mix all-purpose flour, yogurt, baking soda, and a little water to make a dough. Let it rest for 1 hour.",
      "Roll out bhature and deep fry until golden brown.",
      "Serve hot with chole."
    ],
    "video_url": "https://www.youtube.com/watch?v=QbyXsYOTJD4&pp=ygUUY2hvbGUgYmhhdHVyZSByZWNpcGU%3D"
  },
  {
    "meal_name": "Keema Matar",
    "prep_time": "1 hour",
    "rating": "4.7",
    "ingredients": [
      "500g ground lamb",
      "1 cup green peas",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp garam masala",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Heat oil in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add ground lamb and cook until browned.",
      "Add tomatoes, turmeric, ground cumin, and ground coriander. Cook until tomatoes are soft.",
      "Add green peas and cook for 5 minutes.",
      "Season with salt and stir in garam masala.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=HxiTOxtHWZw&pp=ygUSa2VlbWEgbWF0YXIgcmVjaXBl"
  },
  {
    "meal_name": "Masoor Dal",
    "prep_time": "45 minutes",
    "rating": "4.6",
    "ingredients": [
      "1 cup red lentils",
      "1 large onion, finely chopped",
      "2 tomatoes, chopped",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "Salt to taste",
      "2 tbsp ghee or oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Cook red lentils in a pressure cooker until soft.",
      "Heat ghee in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add tomatoes, turmeric, ground cumin, and ground coriander. Cook until tomatoes are soft.",
      "Add cooked lentils and a little water. Simmer for 10 minutes.",
      "Season with salt.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=G6cOPZ8yxwI&pp=ygURbWFzb29yIGRhbCByZWNpcGU%3D"
  },
  {
    "meal_name": "Chicken Tikka",
    "prep_time": "1 hour",
    "rating": "4.9",
    "ingredients": [
      "500g chicken breast, cubed",
      "1 cup yogurt",
      "2 tbsp lemon juice",
      "2 tsp garam masala",
      "2 tsp turmeric",
      "2 tsp ground cumin",
      "2 tsp paprika",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "Salt to taste",
      "2 tbsp oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Marinate the chicken with yogurt, lemon juice, garlic, ginger, and spices for at least 30 minutes.",
      "Preheat the grill to medium-high heat.",
      "Thread the chicken pieces onto skewers.",
      "Grill the chicken until fully cooked, about 10 minutes, turning occasionally.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=5EAgEwjHaSk&pp=ygUNY2hpY2tlbiB0aWtrYQ%3D%3D"
  },
  {
    "meal_name": "Vegetable Pulao",
    "prep_time": "45 minutes",
    "rating": "4.5",
    "ingredients": [
      "2 cups basmati rice",
      "1 large onion, finely chopped",
      "2 carrots, chopped",
      "1 cup green peas",
      "1 cup green beans, chopped",
      "2 potatoes, cubed",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 green chilies, chopped",
      "1 tsp cumin seeds",
      "1/2 tsp turmeric",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "Salt to taste",
      "2 tbsp ghee or oil",
      "Fresh cilantro for garnish"
    ],
    "recipe": [
      "Rinse the basmati rice and soak for 30 minutes. Drain.",
      "Heat ghee in a pan. Add cumin seeds and let them splutter.",
      "Add onions and sauté until golden brown.",
      "Add garlic, ginger, and green chilies. Cook for 1 minute.",
      "Add all the vegetables, turmeric, ground cumin, and ground coriander. Cook for 5 minutes.",
      "Add rice and stir to coat with the spices.",
      "Add 4 cups of water and bring to a boil. Reduce heat and cover. Simmer until rice is cooked, about 20 minutes.",
      "Season with salt.",
      "Garnish with fresh cilantro before serving."
    ],
    "video_url": "https://www.youtube.com/watch?v=xVKqauZjwXE&pp=ygUWdmVnZXRhYmxlIHB1bGFvIHJlY2lwZQ%3D%3D"
  },
  {
    "meal_name": "Dahi Vada",
    "prep_time": "1 hour",
    "rating": "4.6",
    "ingredients": [
      "1 cup urad dal (split black gram), soaked overnight",
      "1 cup yogurt",
      "1 tsp cumin seeds",
      "1/2 tsp black salt",
      "1/2 tsp chaat masala",
      "Oil for frying",
      "Fresh cilantro for garnish",
      "Tamarind chutney for serving",
      "Mint chutney for serving"
    ],
    "recipe": [
      "Grind soaked urad dal into a smooth batter.",
      "Heat oil in a deep pan.",
      "Drop spoonfuls of batter into hot oil and fry until golden and crisp.",
      "Soak fried vadas in water for 15 minutes, then squeeze out the water.",
      "Whisk yogurt with cumin seeds, black salt, and chaat masala.",
      "Serve vadas topped with spiced yogurt, tamarind chutney, mint chutney, and fresh cilantro."
    ],
    "video_url": "https://www.youtube.com/watch?v=z1YmDU0Z4Sc&pp=ygUSZGFoaSBiaGFsbGEgcmVjaXBl"
  },

  {
    meal_name: "Beef Tacos",
    prep_time: "30 minutes",
    rating: "3.5",
    ingredients: [
      "500g ground beef",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 tablespoon chili powder",
      "1 teaspoon ground cumin",
      "1/2 teaspoon paprika",
      "1/4 teaspoon cayenne pepper",
      "Salt and pepper to taste",
      "8 small flour tortillas",
      "Assorted toppings (such as shredded lettuce, diced tomatoes, shredded cheese, salsa, sour cream)",
      "Lime wedges for serving"
    ],
    recipe: [
      "In a large skillet, cook ground beef over medium heat until browned.",
      "Add diced onion and minced garlic, and cook until softened.",
      "Stir in chili powder, ground cumin, paprika, cayenne pepper, salt, and pepper, and cook for another 2-3 minutes, stirring constantly.",
      "Warm flour tortillas according to package instructions.",
      "Spoon beef mixture onto each tortilla.",
      "Serve hot with assorted toppings and lime wedges on the side."
    ],
    video_url: "https://www.youtube.com/watch?v=qL6ml7x56p4"
  },
  {
    meal_name: "Spaghetti Carbonara",
    prep_time: "30 minutes",
    rating: "3.0",
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g grated Parmesan cheese",
      "2 cloves garlic",
      "Salt and pepper to taste"
    ],
    recipe: [
      "Cook spaghetti according to package instructions.",
      "In a separate pan, cook pancetta until crispy.",
      "In a bowl, whisk together eggs and Parmesan cheese.",
      "Once spaghetti is cooked, drain and add to the pan with pancetta.",
      "Turn off the heat, then quickly add the egg mixture to the pan, stirring constantly until the eggs thicken and coat the spaghetti.",
      "Serve immediately with additional Parmesan cheese and black pepper."
    ],
    video_url: "https://www.youtube.com/watch?v=waH2yGRWh5E"
  },
  {
    meal_name: "Chicken Alfredo",
    prep_time: "25 minutes",
    rating: "2",
    ingredients: [
      "250g fettuccine",
      "2 chicken breasts",
      "1 cup heavy cream",
      "1/2 cup grated Parmesan cheese",
      "2 cloves garlic, minced",
      "2 tablespoons butter",
      "Salt and pepper to taste"
    ],
    recipe: [
      "Cook fettuccine according to package instructions.",
      "Season chicken breasts with salt and pepper, then cook in a skillet until fully cooked.",
      "In the same skillet, melt butter and sauté garlic until fragrant.",
      "Stir in heavy cream and Parmesan cheese until sauce is smooth.",
      "Slice cooked chicken and add to the sauce.",
      "Serve hot over cooked fettuccine."
    ],
    video_url:"https://www.youtube.com/watch?v=F7CU0qBdj04"
  },
  {
    meal_name: "Chicken Parmesan",
    prep_time: "40 minutes",
    rating: "2.7",
    ingredients: [
      "2 boneless, skinless chicken breasts",
      "1 cup breadcrumbs",
      "1/2 cup grated Parmesan cheese",
      "1 egg",
      "1 cup marinara sauce",
      "1/2 cup shredded mozzarella cheese",
      "2 tablespoons olive oil",
      "Salt and pepper to taste"
    ],
    recipe: [
      "Preheat oven to 375°F (190°C).",
      "In a shallow dish, mix breadcrumbs and grated Parmesan cheese.",
      "In another dish, beat the egg.",
      "Season chicken breasts with salt and pepper.",
      "Dip each chicken breast in the beaten egg, then coat with breadcrumb mixture.",
      "Heat olive oil in a skillet over medium-high heat.",
      "Add chicken breasts and cook until golden brown on both sides.",
      "Transfer chicken to a baking dish.",
      "Spoon marinara sauce over each chicken breast, then sprinkle shredded mozzarella cheese on top.",
      "Bake in the preheated oven for 20-25 minutes or until chicken is cooked through and cheese is melted and bubbly."
    ],
    video_url:"https://www.youtube.com/watch?v=DeXgYawwkac"
  },
  {
    meal_name: "Beef Stir-Fry",
    prep_time: "25 minutes",
    rating: "3.5",
    ingredients: [
      "500g beef sirloin, thinly sliced",
      "2 cups mixed vegetables (such as bell peppers, onions, carrots, broccoli)",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon cornstarch",
      "1 tablespoon vegetable oil",
      "2 cloves garlic, minced",
      "1 teaspoon grated ginger",
      "Cooked rice for serving"
    ],
    recipe: [
      "In a small bowl, mix soy sauce, oyster sauce, and cornstarch. Set aside.",
      "Heat vegetable oil in a large skillet or wok over high heat.",
      "Add minced garlic and grated ginger, and stir-fry for about 30 seconds.",
      "Add beef slices to the skillet and stir-fry until browned.",
      "Add mixed vegetables and stir-fry for another 2-3 minutes, or until vegetables are tender-crisp.",
      "Pour the sauce mixture over the beef and vegetables, and toss to coat evenly.",
      "Cook for another minute until the sauce thickens.",
      "Serve hot over cooked rice."
    ],
    video_url:"https://www.youtube.com/watch?v=cyS8ycmGs1U"
  },
  {
    meal_name: "Spinach and Feta Stuffed Chicken Breast",
    prep_time: "35 minutes",
    rating: "4",
    ingredients: [
      "4 boneless, skinless chicken breasts",
      "2 cups fresh spinach leaves",
      "1/2 cup crumbled feta cheese",
      "2 cloves garlic, minced",
      "1 tablespoon olive oil",
      "Salt and pepper to taste"
    ],
    recipe: [
      "Preheat oven to 375°F (190°C).",
      "In a skillet, heat olive oil over medium heat.",
      "Add minced garlic and spinach leaves, and cook until spinach wilts. Remove from heat and let cool slightly.",
      "Cut a slit horizontally through the thickest part of each chicken breast to create a pocket.",
      "Stuff each pocket with cooked spinach and crumbled feta cheese.",
      "Season the outside of each chicken breast with salt and pepper.",
      "Heat a skillet over medium-high heat.",
      "Add stuffed chicken breasts and cook until golden brown on both sides.",
      "Transfer chicken breasts to a baking dish and bake in the preheated oven for 20-25 minutes or until chicken is cooked through."
    ],
    video_url:"https://www.youtube.com/watch?v=V8UocdMjbbM"
  },
  {
    meal_name: "Honey Garlic Shrimp",
    prep_time: "15 minutes",
    rating: "3.5",
    ingredients: [
      "500g shrimp, peeled and deveined",
      "3 cloves garlic, minced",
      "1/4 cup honey",
      "2 tablespoons soy sauce",
      "1 tablespoon rice vinegar",
      "1 tablespoon sesame oil",
      "1 tablespoon cornstarch",
      "1 tablespoon water",
      "Sesame seeds and sliced green onions for garnish"
    ],
    recipe: [
      "In a small bowl, whisk together honey, soy sauce, rice vinegar, sesame oil, minced garlic, cornstarch, and water to make the sauce.",
      "Set aside.",
      "Heat a skillet over medium-high heat. Add shrimp and cook until pink and opaque.",
      "Add the sauce to the skillet and toss to coat the shrimp evenly.",
      "Let simmer for 2-3 minutes, or until the sauce thickens. Remove from heat.",
      "Garnish with sesame seeds and sliced green onions before serving.",
      "Serve hot over cooked rice or noodles."
    ],
    video_url:"https://www.youtube.com/watch?v=Smmh8vf0bho"
  },
  {
    meal_name: "Stuffed Bell Peppers",
    prep_time: "1 hour",
    rating: "4.2",
    ingredients: [
      "4 bell peppers",
      "1 cup cooked rice",
      "500g ground beef",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 cup tomato sauce",
      "1/2 cup shredded cheddar cheese",
      "1 tablespoon olive oil",
      "Salt and pepper to taste"
    ],
    recipe: [
      "Preheat oven to 375°F (190°C).",
      "Cut the tops off the bell peppers and remove the seeds and membranes.",
      "Heat olive oil in a skillet over medium heat. Add diced onion and minced garlic, and cook until softened.",
      "Add ground beef to the skillet and cook until browned. Drain excess fat, then stir in cooked rice and tomato sauce.",
      "Season with salt and pepper to taste.",
      "Stuff each bell pepper with the beef and rice mixture.",
      "Place stuffed bell peppers in a baking dish. Cover with foil and bake in the preheated oven for 30 minutes.",
      "Remove foil, sprinkle shredded cheddar cheese over the tops of the peppers, and bake for an additional 10 minutes or until cheese is melted and bubbly."
    ],
    video_url:"https://www.youtube.com/watch?v=ektsiKFVqks"
  },
  {
    meal_name: "Vegetarian Tacos",
    prep_time: "30 minutes",
    rating: "5",
    ingredients: [
      "1 tablespoon olive oil",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 bell pepper, chopped",
      "1 zucchini, chopped",
      "1 can black beans, drained and rinsed",
      "1 cup corn kernels",
      "1 tablespoon chili powder",
      "1 teaspoon cumin",
      "Salt and pepper to taste",
      "8 small tortillas",
      "Toppings: diced tomatoes, shredded lettuce, shredded cheese, salsa, sour cream, chopped cilantro"
    ],
    recipe: [
      "Heat olive oil in a large skillet over medium heat. Add onion and garlic, and sauté until softened.",
      "Add bell pepper and zucchini, and cook until tender.",
      "Stir in black beans, corn, chili powder, cumin, salt, and pepper. Cook until heated through.",
      "Warm tortillas in a dry skillet or microwave.",
      "Fill each tortilla with the vegetable mixture and add desired toppings.",
      "Serve immediately."
    ],
    video_url:"https://www.youtube.com/watch?v=7_UtpAf2Mag"
  },
  {
    meal_name: "Quinoa Salad",
    prep_time: "20 minutes",
    rating: "3",
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups water",
      "1 cucumber, diced",
      "1 bell pepper, diced",
      "1/4 cup red onion, finely chopped",
      "1/2 cup cherry tomatoes, halved",
      "1/4 cup chopped fresh parsley",
      "1/4 cup olive oil",
      "2 tablespoons lemon juice",
      "Salt and pepper to taste"
    ],
    recipe: [
      "In a medium saucepan, bring water to a boil. Add quinoa, reduce heat to low, cover, and simmer for about 15 minutes or until water is absorbed. Remove from heat and let cool.",
      "In a large bowl, combine cooked quinoa, cucumber, bell pepper, red onion, cherry tomatoes, and parsley.",
      "In a small bowl, whisk together olive oil, lemon juice, salt, and pepper.",
      "Pour the dressing over the salad and toss to combine.",
      "Serve chilled or at room temperature."
    ],
    video_url:"https://www.youtube.com/watch?v=4vc3UL59Ux4"
  },
  
  {
    meal_name: "Vegetable Curry",
    prep_time: "40 minutes",
    rating: "3.5",
    ingredients: [
      "2 tablespoons vegetable oil",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "2 tablespoons curry powder",
      "1 teaspoon ground cumin",
      "1 teaspoon ground turmeric",
      "1 can coconut milk",
      "1 cup vegetable broth",
      "2 potatoes, diced",
      "2 carrots, sliced",
      "1 bell pepper, chopped",
      "1 cup cauliflower florets",
      "Salt and pepper to taste",
      "Chopped cilantro for garnish",
      "Cooked rice or naan for serving"
    ],
    recipe: [
      "Heat vegetable oil in a large pot over medium heat. Add onion, garlic, and ginger, and sauté until softened.",
      "Stir in curry powder, ground cumin, and ground turmeric, and cook for another minute.",
      "Add coconut milk and vegetable broth to the pot and bring to a simmer.",
      "Add potatoes, carrots, bell pepper, and cauliflower. Cover and simmer for about 20 minutes, or until vegetables are tender.",
      "Season with salt and pepper to taste.",
      "Garnish with chopped cilantro before serving.",
      "Serve hot with cooked rice or naan."
    ],
    video_url:"https://www.youtube.com/watch?v=KoWH5rw7s6s"
  },
  {
    meal_name: "Margherita Pizza",
    prep_time: "20 minutes",
    rating: "4.2",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "1 cup fresh mozzarella cheese, sliced",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "Salt and pepper to taste"
    ],
    recipe: [
      "Preheat oven to 475°F (245°C).",
      "Roll out pizza dough on a floured surface to your desired thickness.",
      "Transfer dough to a baking sheet or pizza stone.",
      "Spread tomato sauce evenly over the dough.",
      "Arrange slices of mozzarella cheese on top.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in preheated oven for 10-12 minutes, or until crust is golden and cheese is bubbly.",
      "Remove from oven and top with fresh basil leaves before serving."
    ],
    video_url: "https://www.youtube.com/watch?v=nu_xX4bIbOE"
},
{
    meal_name: "Chicken Biryani",
    prep_time: "1 hour",
    rating: "4.7",
    ingredients: [
      "500g chicken, cut into pieces",
      "2 cups basmati rice",
      "1 onion, sliced",
      "2 tomatoes, chopped",
      "2 cloves garlic, minced",
      "1 tablespoon ginger paste",
      "1/2 cup yogurt",
      "2 tablespoons biryani masala",
      "1/2 teaspoon turmeric",
      "1/4 teaspoon saffron strands",
      "4 cups water",
      "Fresh cilantro and mint leaves for garnish",
      "Salt to taste"
    ],
    recipe: [
      "Soak basmati rice in water for 30 minutes, then drain.",
      "In a large pot, heat oil and sauté onions until golden brown.",
      "Add garlic, ginger, and chicken pieces, and cook until chicken is browned.",
      "Stir in tomatoes, yogurt, biryani masala, turmeric, and salt.",
      "Cook for 10 minutes, then add rice and water. Stir well.",
      "Cover and cook on low heat for 20-25 minutes, or until rice is cooked and water is absorbed.",
      "Soak saffron strands in a tablespoon of warm water and drizzle over the biryani.",
      "Garnish with fresh cilantro and mint leaves before serving."
    ],
    video_url: "https://www.youtube.com/watch?v=40VJanswaAQ"
},
{
    meal_name: "Eggplant Parmesan",
    prep_time: "45 minutes",
    rating: "4.0",
    ingredients: [
      "2 large eggplants, sliced",
      "1 cup breadcrumbs",
      "1/2 cup grated Parmesan cheese",
      "2 large eggs, beaten",
      "2 cups marinara sauce",
      "1 cup shredded mozzarella cheese",
      "2 tablespoons olive oil",
      "Salt and pepper to taste",
      "Fresh basil leaves for garnish"
    ],
    recipe: [
      "Preheat oven to 375°F (190°C).",
      "In a shallow dish, mix breadcrumbs and grated Parmesan cheese.",
      "Dip eggplant slices in beaten eggs, then coat with breadcrumb mixture.",
      "Heat olive oil in a skillet over medium-high heat.",
      "Add eggplant slices and cook until golden brown on both sides.",
      "In a baking dish, layer eggplant slices, marinara sauce, and shredded mozzarella cheese.",
      "Repeat layers until all ingredients are used, ending with a layer of cheese.",
      "Bake in preheated oven for 25-30 minutes, or until cheese is melted and bubbly.",
      "Garnish with fresh basil leaves before serving."
    ],
    video_url: "https://www.youtube.com/watch?v=rLZsKI8dcvo"
},
{
    meal_name: "Fish Tacos",
    prep_time: "20 minutes",
    rating: "4.3",
    ingredients: [
      "500g white fish fillets, cut into strips",
      "1 tablespoon olive oil",
      "1 teaspoon chili powder",
      "1/2 teaspoon cumin",
      "1/4 teaspoon paprika",
      "Salt and pepper to taste",
      "8 small corn tortillas",
      "1 cup shredded cabbage",
      "1/2 cup salsa",
      "1/4 cup sour cream",
      "Lime wedges for serving"
    ],
    recipe: [
      "Preheat oven to 400°F (200°C).",
      "In a bowl, toss fish strips with olive oil, chili powder, cumin, paprika, salt, and pepper.",
      "Arrange fish strips on a baking sheet and bake in preheated oven for 10-12 minutes, or until fish is cooked through.",
      "Warm corn tortillas in a dry skillet or microwave.",
      "Fill each tortilla with fish strips, shredded cabbage, salsa, and sour cream.",
      "Serve immediately with lime wedges on the side."
    ],
    video_url: "https://www.youtube.com/watch?v=CPFxcByLeYE"
},
{
    meal_name: "Vegetable Stir-Fry",
    prep_time: "20 minutes",
    rating: "3.8",
    ingredients: [
      "2 tablespoons vegetable oil",
      "1 onion, sliced",
      "2 cloves garlic, minced",
      "1 cup broccoli florets",
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 zucchini, sliced",
      "1/4 cup soy sauce",
      "1 tablespoon hoisin sauce",
      "1 tablespoon cornstarch",
      "1/4 cup water",
      "Cooked rice or noodles for serving"
    ],
    recipe: [
      "In a small bowl, mix soy sauce, hoisin sauce, cornstarch, and water. Set aside.",
      "Heat vegetable oil in a large skillet or wok over high heat.",
      "Add onion and garlic, and stir-fry for about 30 seconds.",
      "Add broccoli, bell pepper, carrot, and zucchini. Stir-fry for 5-7 minutes, or until vegetables are tender-crisp.",
      "Pour the sauce mixture over the vegetables and toss to coat evenly.",
      "Cook for another minute until the sauce thickens.",
      "Serve hot over cooked rice or noodles."
    ],
    video_url: "https://www.youtube.com/watch?v=SFq4W3iMsKQ"
},
{
    meal_name: "Lemon Herb Chicken",
    prep_time: "30 minutes",
    rating: "4.5",
    ingredients: [
      "4 boneless, skinless chicken breasts",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "1 teaspoon dried thyme",
      "1 teaspoon dried rosemary",
      "Juice of 1 lemon",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    recipe: [
      "In a small bowl, mix olive oil, minced garlic, dried thyme, dried rosemary, lemon juice, salt, and pepper.",
      "Brush the mixture over the chicken breasts, coating them evenly.",
      "Heat a skillet over medium-high heat.",
      "Add chicken breasts and cook until golden brown on both sides and cooked through.",
      "Garnish with fresh parsley before serving."
    ],
    video_url: "https://www.youtube.com/watch?v=QmmHT4mUqzs"
},
{
    meal_name: "Tomato Basil Soup",
    prep_time: "30 minutes",
    rating: "4.7",
    ingredients: [
      "2 tablespoons olive oil",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 can (28 ounces) crushed tomatoes",
      "2 cups vegetable broth",
      "1/2 cup heavy cream",
      "1/4 cup chopped fresh basil",
      "Salt and pepper to taste",
      "Grated Parmesan cheese for garnish"
    ],
    recipe: [
      "Heat olive oil in a large pot over medium heat.",
      "Add onion and garlic, and sauté until softened.",
      "Stir in crushed tomatoes and vegetable broth. Bring to a simmer and cook for 15 minutes.",
      "Add heavy cream and chopped fresh basil. Season with salt and pepper to taste.",
      "Use an immersion blender to blend the soup until smooth.",
      "Serve hot, garnished with grated Parmesan cheese."
    ],
    video_url: "https://www.youtube.com/watch?v=guwu8I2VDTI"
},
{
    meal_name: "Garlic Butter Shrimp",
    prep_time: "15 minutes",
    rating: "4.6",
    ingredients: [
      "500g shrimp, peeled and deveined",
      "3 cloves garlic, minced",
      "1/4 cup butter",
      "1/4 cup fresh parsley, chopped",
      "Juice of 1 lemon",
      "Salt and pepper to taste",
      "Cooked rice or pasta for serving"
    ],
    recipe: [
      "In a large skillet, melt butter over medium heat.",
      "Add minced garlic and cook until fragrant.",
      "Add shrimp and cook until pink and opaque.",
      "Stir in chopped parsley and lemon juice. Season with salt and pepper to taste.",
      "Serve hot over cooked rice or pasta."
    ],
    video_url: "https://www.youtube.com/watch?v=JS12i22tk7A"
},
{
  meal_name: "Beef Stew",
  prep_time: "2 hours",
  rating: "4.2",
  ingredients: [
      "1 kg beef chuck, cut into chunks",
      "2 tablespoons olive oil",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "2 carrots, sliced",
      "2 potatoes, diced",
      "3 cups beef broth",
      "1 cup red wine",
      "2 tablespoons tomato paste",
      "1 teaspoon dried thyme",
      "1 bay leaf",
      "Salt and pepper to taste"
  ],
  recipe: [
      "Heat olive oil in a large pot over medium heat. Brown the beef chunks on all sides.",
      "Remove the beef and set aside. Add the onion and garlic to the pot and sauté until softened.",
      "Stir in the tomato paste, thyme, and bay leaf.",
      "Return the beef to the pot and add the carrots, potatoes, beef broth, and red wine.",
      "Bring to a boil, then reduce heat to low, cover, and simmer for 1.5 to 2 hours, or until beef is tender.",
      "Season with salt and pepper to taste. Serve hot."
  ],
  video_url: "https://www.youtube.com/watch?v=gg8qQTrb9lk&rco=1"
},
{
  meal_name: "Chicken Caesar Salad",
  prep_time: "20 minutes",
  rating: "4.5",
  ingredients: [
      "2 chicken breasts",
      "1 romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/4 cup grated Parmesan cheese",
      "1 cup croutons",
      "Salt and pepper to taste"
  ],
  recipe: [
      "Season the chicken breasts with salt and pepper, then grill or pan-fry until cooked through. Slice into strips.",
      "Chop the romaine lettuce and place in a large bowl.",
      "Add the Caesar dressing and toss to coat the lettuce evenly.",
      "Top with the sliced chicken, grated Parmesan cheese, and croutons.",
      "Serve immediately."
  ],
  video_url: "https://www.youtube.com/watch?v=a4Z2x0sPq3A"
},
{
  meal_name: "Mushroom Risotto",
  prep_time: "40 minutes",
  rating: "4.7",
  ingredients: [
      "1 cup Arborio rice",
      "2 tablespoons olive oil",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "200g mushrooms, sliced",
      "1/2 cup white wine",
      "4 cups chicken broth",
      "1/2 cup grated Parmesan cheese",
      "2 tablespoons butter",
      "Salt and pepper to taste",
      "Chopped parsley for garnish"
  ],
  recipe: [
      "Heat the chicken broth in a saucepan and keep it warm.",
      "In a large pot, heat the olive oil over medium heat. Add the onion and garlic, and sauté until softened.",
      "Add the mushrooms and cook until tender.",
      "Stir in the Arborio rice and cook for 1-2 minutes, until the rice is lightly toasted.",
      "Pour in the white wine and stir until it is absorbed by the rice.",
      "Add the warm broth, one ladleful at a time, stirring constantly until the liquid is absorbed before adding more.",
      "Continue this process until the rice is creamy and cooked through.",
      "Stir in the Parmesan cheese and butter, and season with salt and pepper.",
      "Garnish with chopped parsley before serving."
  ],
  video_url: "https://www.youtube.com/watch?v=eYIMIP2dIpE"
},
{
  meal_name: "Classic Lasagna",
  prep_time: "1 hour 30 minutes",
  rating: "4.8",
  ingredients: [
      "500g ground beef",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "800g canned tomatoes",
      "2 tablespoons tomato paste",
      "1 teaspoon dried oregano",
      "1 teaspoon dried basil",
      "Salt and pepper to taste",
      "12 lasagna noodles",
      "500g ricotta cheese",
      "2 cups shredded mozzarella cheese",
      "1 cup grated Parmesan cheese",
      "2 tablespoons olive oil"
  ],
  recipe: [
      "Preheat the oven to 375°F (190°C).",
      "In a large skillet, heat the olive oil over medium heat. Add the onion and garlic, and sauté until softened.",
      "Add the ground beef and cook until browned. Drain any excess fat.",
      "Stir in the canned tomatoes, tomato paste, oregano, basil, salt, and pepper. Simmer for 20 minutes.",
      "Cook the lasagna noodles according to package instructions.",
      "In a large baking dish, spread a layer of meat sauce.",
      "Add a layer of lasagna noodles, followed by a layer of ricotta cheese, and a sprinkle of mozzarella and Parmesan cheese.",
      "Repeat the layers until all ingredients are used, finishing with a layer of meat sauce and cheese on top.",
      "Cover with foil and bake for 25 minutes. Remove the foil and bake for an additional 25 minutes, until the cheese is melted and bubbly.",
      "Let cool for 10 minutes before serving."
  ],
  video_url: "https://www.youtube.com/watch?v=3JPCVy5cZ_c"
},
{
  meal_name: "Shrimp Scampi",
  prep_time: "25 minutes",
  rating: "4.6",
  ingredients: [
      "500g shrimp, peeled and deveined",
      "3 cloves garlic, minced",
      "1/4 cup white wine",
      "1/4 cup lemon juice",
      "1/4 cup butter",
      "2 tablespoons olive oil",
      "Salt and pepper to taste",
      "Chopped parsley for garnish",
      "Cooked pasta for serving"
  ],
  recipe: [
      "Heat the olive oil and butter in a large skillet over medium heat.",
      "Add the garlic and cook until fragrant, about 1 minute.",
      "Add the shrimp and cook until pink and opaque, about 2-3 minutes per side.",
      "Pour in the white wine and lemon juice, and season with salt and pepper.",
      "Simmer for 2-3 minutes, until the sauce reduces slightly.",
      "Serve the shrimp scampi over cooked pasta, garnished with chopped parsley."
  ],
  video_url: "https://www.youtube.com/watch?v=3ELo1zykAGU"
},
{
  meal_name: "BBQ Chicken Pizza",
  prep_time: "45 minutes",
  rating: "4.5",
  ingredients: [
      "1 pizza dough",
      "1 cup BBQ sauce",
      "2 cups cooked chicken, shredded",
      "1 cup shredded mozzarella cheese",
      "1/2 cup red onion, sliced",
      "1/4 cup chopped fresh cilantro"
  ],
  recipe: [
      "Preheat the oven to 450°F (230°C).",
      "Roll out the pizza dough on a floured surface to your desired thickness.",
      "Spread a layer of BBQ sauce over the dough.",
      "Top with shredded chicken, mozzarella cheese, and red onion slices.",
      "Bake in the preheated oven for 15-20 minutes, or until the crust is golden and the cheese is melted and bubbly.",
      "Garnish with chopped fresh cilantro before serving."
  ],
  video_url: "https://www.youtube.com/watch?v=Qsn7jfCWl98"
},
{
  meal_name: "Greek Salad",
  prep_time: "15 minutes",
  rating: "4.1",
  ingredients: [
      "3 cups chopped romaine lettuce",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, sliced",
      "1/2 red onion, thinly sliced",
      "1/2 cup Kalamata olives",
      "1/2 cup crumbled feta cheese",
      "1/4 cup olive oil",
      "2 tablespoons red wine vinegar",
      "1 teaspoon dried oregano",
      "Salt and pepper to taste"
  ],
  recipe: [
      "In a large bowl, combine the romaine lettuce, cherry tomatoes, cucumber, red onion, Kalamata olives, and feta cheese.",
      "In a small bowl, whisk together the olive oil, red wine vinegar, dried oregano, salt, and pepper.",
      "Pour the dressing over the salad and toss to combine.",
      "Serve immediately."
  ],
  video_url: "https://www.youtube.com/watch?v=kwq4vl610iY"
},
{
  meal_name: "Chicken Fajitas",
  prep_time: "30 minutes",
  rating: "4.4",
  ingredients: [
      "2 chicken breasts, sliced into strips",
      "1 bell pepper, sliced",
      "1 onion, sliced",
      "2 tablespoons vegetable oil",
      "1 teaspoon chili powder",
      "1 teaspoon ground cumin",
      "1/2 teaspoon paprika",
      "1/2 teaspoon garlic powder",
      "Salt and pepper to taste",
      "8 flour tortillas",
      "Toppings: sour cream, guacamole, salsa, shredded cheese"
  ],
  recipe: [
      "In a large skillet, heat the vegetable oil over medium-high heat.",
      "Add the chicken strips, bell pepper, and onion to the skillet.",
      "Season with chili powder, ground cumin, paprika, garlic powder, salt, and pepper.",
      "Cook, stirring frequently, until the chicken is cooked through and the vegetables are tender, about 8-10 minutes.",
      "Warm the flour tortillas in a dry skillet or microwave.",
      "Serve the chicken and vegetable mixture in the warm tortillas, with desired toppings."
  ],
  video_url: "https://www.youtube.com/watch?v=g-LT0igt9lo"
},
{
  meal_name: "Beef and Broccoli",
  prep_time: "25 minutes",
  rating: "4.6",
  ingredients: [
      "500g beef sirloin, sliced into thin strips",
      "2 cups broccoli florets",
      "2 tablespoons vegetable oil",
      "2 cloves garlic, minced",
      "1/4 cup soy sauce",
      "1 tablespoon oyster sauce",
      "1 tablespoon cornstarch",
      "1 tablespoon water",
      "Cooked rice for serving"
  ],
  recipe: [
      "In a small bowl, mix soy sauce, oyster sauce, cornstarch, and water. Set aside.",
      "Heat vegetable oil in a large skillet or wok over high heat.",
      "Add minced garlic and stir-fry for about 30 seconds.",
      "Add beef strips to the skillet and stir-fry until browned.",
      "Add broccoli florets and stir-fry for another 2-3 minutes, or until the broccoli is tender-crisp.",
      "Pour the sauce mixture over the beef and broccoli, and toss to coat evenly.",
      "Cook for another minute until the sauce thickens.",
      "Serve hot over cooked rice."
  ],
  video_url: "https://www.youtube.com/watch?v=8eITNSfct3Q"
},
{
  meal_name: "Pesto Pasta",
  prep_time: "20 minutes",
  rating: "4.2",
  ingredients: [
      "400g pasta",
      "1 cup fresh basil leaves",
      "1/4 cup pine nuts",
      "2 cloves garlic",
      "1/2 cup grated Parmesan cheese",
      "1/2 cup olive oil",
      "Salt and pepper to taste"
  ],
  recipe: [
      "Cook the pasta according to package instructions.",
      "In a food processor, combine basil leaves, pine nuts, garlic, and Parmesan cheese. Pulse until finely chopped.",
      "With the processor running, slowly add olive oil until the mixture is smooth.",
      "Season with salt and pepper to taste.",
      "Drain the cooked pasta and return to the pot. Add the pesto and toss to coat evenly.",
      "Serve immediately with additional Parmesan cheese, if desired."
  ],
  video_url: "https://www.youtube.com/watch?v=p7edUxCLOGw"
},
{
  meal_name: "Stuffed Mushrooms",
  prep_time: "30 minutes",
  rating: "4.0",
  ingredients: [
      "20 large mushrooms, stems removed",
      "1/2 cup cream cheese, softened",
      "1/4 cup grated Parmesan cheese",
      "2 cloves garlic, minced",
      "1/4 cup chopped fresh parsley",
      "Salt and pepper to taste",
      "2 tablespoons olive oil"
  ],
  recipe: [
      "Preheat the oven to 375°F (190°C).",
      "In a medium bowl, combine the cream cheese, Parmesan cheese, garlic, parsley, salt, and pepper.",
      "Stuff each mushroom with the cream cheese mixture.",
      "Place the stuffed mushrooms on a baking sheet and drizzle with olive oil.",
      "Bake in the preheated oven for 20 minutes, or until the mushrooms are tender and the filling is golden brown.",
      "Serve hot."
  ],
  video_url: "https://www.youtube.com/watch?v=piRCiB2Zm-Y"
},
{
  meal_name: "Chicken Quesadillas",
  prep_time: "20 minutes",
  rating: "4.3",
  ingredients: [
      "2 chicken breasts, cooked and shredded",
      "1 cup shredded cheddar cheese",
      "1/2 cup salsa",
      "8 flour tortillas",
      "2 tablespoons vegetable oil",
      "Toppings: sour cream, guacamole, chopped cilantro"
  ],
  recipe: [
      "Heat a large skillet over medium heat.",
      "Place a tortilla in the skillet and sprinkle with shredded chicken, cheddar cheese, and salsa.",
      "Top with another tortilla and cook until the bottom is golden brown, about 2-3 minutes.",
      "Carefully flip the quesadilla and cook until the other side is golden brown and the cheese is melted.",
      "Repeat with the remaining tortillas and filling.",
      "Cut the quesadillas into wedges and serve with desired toppings."
  ],
  video_url: "https://www.youtube.com/watch?v=5rtYFVxSgUE"
},
{
  meal_name: "Egg Fried Rice",
  prep_time: "20 minutes",
  rating: "4.4",
  ingredients: [
      "2 cups cooked rice, cooled",
      "2 eggs, beaten",
      "1 cup mixed vegetables (peas, carrots, corn)",
      "2 green onions, chopped",
      "2 cloves garlic, minced",
      "2 tablespoons soy sauce",
      "2 tablespoons vegetable oil",
      "Salt and pepper to taste"
  ],
  recipe: [
      "Heat 1 tablespoon of vegetable oil in a large skillet or wok over medium-high heat.",
      "Add the beaten eggs and scramble until fully cooked. Remove from the skillet and set aside.",
      "Heat the remaining vegetable oil in the skillet and add the garlic. Cook until fragrant.",
      "Add the mixed vegetables and cook until tender.",
      "Stir in the cooked rice and soy sauce. Cook until the rice is heated through.",
      "Add the scrambled eggs and green onions, and stir to combine.",
      "Season with salt and pepper to taste. Serve hot."
  ],
  video_url: "https://www.youtube.com/watch?v=O9uoC3u17XA"
},
{
  meal_name: "Teriyaki Chicken",
  prep_time: "30 minutes",
  rating: "4.5",
  ingredients: [
      "4 chicken thighs",
      "1/4 cup soy sauce",
      "1/4 cup mirin",
      "1/4 cup sake",
      "2 tablespoons sugar",
      "2 cloves garlic, minced",
      "1 teaspoon grated ginger",
      "Cooked rice for serving",
      "Chopped green onions and sesame seeds for garnish"
  ],
  recipe: [
      "In a small bowl, combine soy sauce, mirin, sake, sugar, garlic, and ginger.",
      "Place the chicken thighs in a shallow dish and pour the marinade over them. Let marinate for at least 15 minutes.",
      "Heat a large skillet over medium-high heat. Add the chicken thighs, skin-side down, and cook until browned.",
      "Flip the chicken and pour in the remaining marinade. Reduce the heat to low and cover.",
      "Simmer for about 15 minutes, or until the chicken is cooked through.",
      "Serve the teriyaki chicken over cooked rice, garnished with chopped green onions and sesame seeds."
  ],
  video_url: "https://www.youtube.com/watch?v=jbRr01FqINo"
},
{
  meal_name: "Lemon Garlic Salmon",
  prep_time: "25 minutes",
  rating: "4.7",
  ingredients: [
      "4 salmon fillets",
      "2 tablespoons olive oil",
      "3 cloves garlic, minced",
      "Juice of 1 lemon",
      "Salt and pepper to taste",
      "Chopped parsley for garnish"
  ],
  recipe: [
      "Preheat the oven to 375°F (190°C).",
      "Place the salmon fillets on a baking sheet lined with parchment paper.",
      "In a small bowl, mix the olive oil, minced garlic, lemon juice, salt, and pepper.",
      "Brush the mixture over the salmon fillets.",
      "Bake in the preheated oven for 15-20 minutes, or until the salmon is cooked through.",
      "Garnish with chopped parsley before serving."
  ],
  video_url: "https://www.youtube.com/watch?v=9zWCfd_X2zw"
},
{
  meal_name: "Vegetable Curry",
  prep_time: "40 minutes",
  rating: "4.5",
  ingredients: [
      "2 tablespoons vegetable oil",
      "1 onion, chopped",
      "3 cloves garlic, minced",
      "1 tablespoon grated ginger",
      "1 tablespoon curry powder",
      "1 teaspoon ground cumin",
      "1 teaspoon ground coriander",
      "1/2 teaspoon turmeric",
      "2 cups mixed vegetables (carrots, potatoes, peas)",
      "1 can coconut milk",
      "1 can diced tomatoes",
      "Salt and pepper to taste",
      "Cooked rice for serving",
      "Chopped cilantro for garnish"
  ],
  recipe: [
      "Heat the vegetable oil in a large pot over medium heat.",
      "Add the onion, garlic, and ginger, and sauté until the onion is translucent.",
      "Stir in the curry powder, ground cumin, ground coriander, and turmeric, and cook for 1-2 minutes, until fragrant.",
      "Add the mixed vegetables and stir to coat with the spices.",
      "Pour in the coconut milk and diced tomatoes, and bring to a simmer.",
      "Reduce the heat to low and cook for 20-25 minutes, or until the vegetables are tender.",
      "Season with salt and pepper to taste.",
      "Serve the vegetable curry over cooked rice, garnished with chopped cilantro."
  ],
  video_url: "https://www.youtube.com/watch?v=Ok0Aik_SzxQ"
},
{
  meal_name: "Tacos",
  prep_time: "20 minutes",
  rating: "4.4",
  ingredients: [
      "500g ground beef",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 packet taco seasoning",
      "1/4 cup water",
      "12 taco shells",
      "1 cup shredded lettuce",
      "1 cup diced tomatoes",
      "1 cup shredded cheddar cheese",
      "Sour cream and salsa for serving"
  ],
  recipe: [
      "In a large skillet, cook the ground beef over medium heat until browned. Drain any excess fat.",
      "Add the chopped onion and minced garlic to the skillet and cook until softened.",
      "Stir in the taco seasoning and water, and cook for another 5 minutes.",
      "Warm the taco shells in a dry skillet or microwave.",
      "Fill the taco shells with the beef mixture, shredded lettuce, diced tomatoes, and shredded cheddar cheese.",
      "Serve with sour cream and salsa."
  ],
  video_url: "https://www.youtube.com/watch?v=vmuLzYet9K4&pp=ygUFdGFjb3M%3D"
},
{
  meal_name: "Clam Chowder",
  prep_time: "45 minutes",
  rating: "4.6",
  ingredients: [
      "4 slices bacon, chopped",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "2 cups potatoes, diced",
      "2 cups clam juice",
      "1 cup heavy cream",
      "2 cans clams, drained",
      "Salt and pepper to taste",
      "Chopped fresh parsley for garnish"
  ],
  recipe: [
      "In a large pot, cook the bacon over medium heat until crispy. Remove and set aside, leaving the bacon fat in the pot.",
      "Add the onion and garlic to the pot and sauté until softened.",
      "Stir in the diced potatoes and clam juice, and bring to a boil.",
      "Reduce the heat and simmer until the potatoes are tender, about 15 minutes.",
      "Stir in the heavy cream and clams, and cook for another 5 minutes.",
      "Season with salt and pepper to taste.",
      "Serve hot, garnished with chopped fresh parsley."
  ],
  video_url: "https://www.youtube.com/watch?v=FRNcmhvdUGA&pp=ygUNY2xhbSBjaG93ZGVyIA%3D%3D"
},
{
  meal_name: "Chicken Alfredo",
  prep_time: "30 minutes",
  rating: "4.7",
  ingredients: [
      "2 chicken breasts, cooked and sliced",
      "400g fettuccine",
      "1/2 cup butter",
      "1 cup heavy cream",
      "1 cup grated Parmesan cheese",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Chopped parsley for garnish"
  ],
  recipe: [
      "Cook the fettuccine according to package instructions.",
      "In a large skillet, melt the butter over medium heat.",
      "Add the minced garlic and cook until fragrant.",
      "Stir in the heavy cream and bring to a simmer.",
      "Add the grated Parmesan cheese and stir until melted and the sauce is creamy.",
      "Add the cooked chicken slices to the sauce and heat through.",
      "Drain the cooked fettuccine and add to the skillet, tossing to coat with the sauce.",
      "Season with salt and pepper to taste.",
      "Serve hot, garnished with chopped parsley."
  ],
  video_url: "https://www.youtube.com/watch?v=F7CU0qBdj04&t=1s&pp=ygUPY2hpY2tlbiBhbGZyZWRv"
},
{
  meal_name: "Margherita Pizza",
  prep_time: "1 hour",
  rating: "4.8",
  ingredients: [
      "1 pizza dough",
      "1/2 cup pizza sauce",
      "2 cups shredded mozzarella cheese",
      "1/4 cup fresh basil leaves",
      "2 tablespoons olive oil",
      "Salt and pepper to taste"
  ],
  recipe: [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough on a floured surface to your desired thickness.",
      "Spread a layer of pizza sauce over the dough.",
      "Top with shredded mozzarella cheese and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 10-15 minutes, or until the crust is golden and the cheese is melted and bubbly.",
      "Serve hot."
  ],
  video_url: "https://www.youtube.com/watch?v=x4bphIdEc3E&pp=ygUQbWFyZ2hlcml0YSBwaXp6YQ%3D%3D"
},
{
  meal_name: "French Onion Soup",
  prep_time: "1 hour 20 minutes",
  rating: "4.7",
  ingredients: [
      "4 large onions, thinly sliced",
      "2 tablespoons butter",
      "1 tablespoon olive oil",
      "2 cloves garlic, minced",
      "1 teaspoon sugar",
      "4 cups beef broth",
      "1/2 cup dry white wine",
      "Salt and pepper to taste",
      "4 slices French bread, toasted",
      "1 cup grated Gruyère cheese"
  ],
  recipe: [
      "In a large pot, heat the butter and olive oil over medium heat.",
      "Add the sliced onions and cook, stirring occasionally, until caramelized, about 30-40 minutes.",
      "Add the minced garlic and sugar, and cook for another 5 minutes.",
      "Stir in the beef broth and white wine, and bring to a simmer.",
      "Season with salt and pepper to taste, and simmer for another 20 minutes.",
      "Preheat the broiler. Ladle the soup into oven-safe bowls.",
      "Top each bowl with a slice of toasted French bread and a generous amount of grated Gruyère cheese.",
      "Broil until the cheese is melted and bubbly, about 2-3 minutes.",
      "Serve hot."
  ],
  video_url: "https://www.youtube.com/watch?v=-DLDMQucqDI&pp=ygURZnJlbmNoIG9uaW9uIHNvdXA%3D"
},
{
  meal_name: "Beef Tacos",
  prep_time: "20 minutes",
  rating: "4.4",
  ingredients: [
      "500g ground beef",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 packet taco seasoning",
      "1/4 cup water",
      "12 taco shells",
      "1 cup shredded lettuce",
      "1 cup diced tomatoes",
      "1 cup shredded cheddar cheese",
      "Sour cream and salsa for serving"
  ],
  recipe: [
      "In a large skillet, cook the ground beef over medium heat until browned. Drain any excess fat.",
      "Add the chopped onion and minced garlic to the skillet and cook until softened.",
      "Stir in the taco seasoning and water, and cook for another 5 minutes.",
      "Warm the taco shells in a dry skillet or microwave.",
      "Fill the taco shells with the beef mixture, shredded lettuce, diced tomatoes, and shredded cheddar cheese.",
      "Serve with sour cream and salsa."
  ],
  video_url: "https://www.youtube.com/watch?v=lhMI0fHrGe0"
},
{
  meal_name: "Eggplant Parmesan",
  prep_time: "1 hour",
  rating: "4.3",
  ingredients: [
      "2 large eggplants, sliced",
      "1 cup flour",
      "2 eggs, beaten",
      "1 cup breadcrumbs",
      "2 cups marinara sauce",
      "2 cups shredded mozzarella cheese",
      "1/2 cup grated Parmesan cheese",
      "1/4 cup chopped fresh basil",
      "Salt and pepper to taste",
      "Olive oil for frying"
  ],
  recipe: [
      "Preheat the oven to 375°F (190°C).",
      "Season the eggplant slices with salt and let sit for 10 minutes. Pat dry with paper towels.",
      "Dredge each slice in flour, dip in beaten eggs, and coat with breadcrumbs.",
      "Heat olive oil in a large skillet over medium-high heat. Fry the eggplant slices until golden brown on both sides.",
      "Spread a layer of marinara sauce in a baking dish. Arrange a layer of fried eggplant slices on top.",
      "Sprinkle with shredded mozzarella and grated Parmesan cheese. Repeat layers until all ingredients are used.",
      "Bake in the preheated oven for 20-25 minutes, or until the cheese is melted and bubbly.",
      "Garnish with chopped fresh basil before serving."
  ],
  video_url: "https://www.youtube.com/watch?v=dpTgDz0Qurc"
},
{
  meal_name: "Spaghetti Carbonara",
  prep_time: "25 minutes",
  rating: "4.6",
  ingredients: [
      "400g spaghetti",
      "200g pancetta, diced",
      "2 cloves garlic, minced",
      "4 large eggs",
      "1 cup grated Parmesan cheese",
      "Salt and pepper to taste",
      "Chopped parsley for garnish"
  ],
  recipe: [
      "Cook the spaghetti according to package instructions.",
      "In a large skillet, cook the pancetta over medium heat until crispy.",
      "Add the minced garlic and cook until fragrant.",
      "In a bowl, whisk together the eggs and grated Parmesan cheese.",
      "Drain the spaghetti and return to the pot. Add the pancetta and garlic, and toss to combine.",
      "Remove from heat and quickly stir in the egg and cheese mixture, tossing to create a creamy sauce.",
      "Season with salt and pepper to taste.",
      "Serve hot, garnished with chopped parsley."
  ],
  video_url: "https://www.youtube.com/watch?v=3AAdKl1UYZs"
}

];


// Enable CORS for all routes
app.use(cors());

app.get('/recipes', (req, res) => {
  res.status(200).json(recipes);
});

// Serve static files from the 'build' directory (optional)
app.use(express.static('build'));

// Listen on the defined PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));