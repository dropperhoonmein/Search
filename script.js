let container = document.getElementById("container")
let search = document.getElementById("search")
let dataSet = [
    {
        name: "Jujutsu Kaisen",
        info: "After a boy is thrust into the world of the supernatural, he must rise to the challenge in order to prevent demons from obliterating all that he holds dear."
    },
    {
        name: "Akame Ga Kill",
        info: "A countryside boy named Tatsumi sets out on a journey to The Capital to make a name for himself and met a seemingly dangerous group of Assassins known as Night Raid. Their journey begins."
    },
    {
        name: "Spirited Away",
        info: "Ten-year-old Chihiro and her parents stumble upon a deserted amusement park. After her parents are transformed into pigs, Chihiro works in a bathhouse for spirits to free them."
    },
    {
        name: "Your Name",
        info: "Mitsuha, a rural girl, and Taki, a Tokyo boy, experience a body-swapping phenomenon. They must find each other and unravel the mystery."
    },
    {
        name: "Neon Genesis Evangelion",
        info: "In a future threatened by monstrous Angels, teenagers pilot giant machines called Evangelions to fight them. Shinji Ikari is a reluctant young pilot."
    },
    {
        name: "Cowboy Bebop",
        info: "Spike Spiegel, a jaded bounty hunter with a dark past, travels the solar system with his ragtag crew on the spaceship Bebop, chasing down criminals for rewards."
    },
    {
        name: "Death Note",
        info: "Light Yagami finds a notebook that kills anyone whose name is written in it. He decides to create a utopia by eliminating criminals, but a detective known as L sets out to stop him."
    },
    {
        name: "Fullmetal Alchemist: Brotherhood",
        info: "Brothers Edward and Alphonse Elric attempt alchemy to bring their mother back to life. The failed attempt costs Edward limbs and Alphonse his entire body. They search for a Philosopher's Stone to restore themselves."
    },
    {
        name: "Ouran High School Host Club",
        info: "Haruhi Fujioka breaks a valuable vase belonging to the host club at the prestigious Ouran Academy. To repay her debt, she is forced to join the club and work as a host."
    },
    {
        name: "Attack on Titan",
        info: "Centuries ago, humanity built walls to protect themselves from colossal humanoids called Titans. Eren Yeager and his friends fight the Titans after a colossal Titan breaches the wall."
    },
    {
        name: "My Hero Academia",
        info: "In a world with superpowers (Quirks), a quirkless boy named Izuku Midoriya dreams of becoming a hero. When he meets All Might, the world's greatest hero, Deku begins his journey to become a hero himself."
    },
    {
        name: "Sailor Moon",
        info: "Usagi Tsukino, a clumsy crybaby, discovers her destiny as the legendary warrior Sailor Moon. Joined by her friends who transform into Sailor Guardians, Usagi fights evil forces threatening Earth and the Moon Kingdom."
    },
    {
        name: "Naruto",
        info: "Naruto Uzumaki, a mischievous ninja with a sealed demon fox within him, strives to gain recognition and become Hokage, the leader of his village."
    },
    {
        name: "Fruits Basket",
        info: "After her mother's death, orphaned Tohru Honda starts living in a tent on the property of the mysterious Sohma family. She discovers their shocking secret: they transform into animals from the zodiac when touched by the opposite sex."
    },
    {
        name: "Hunter x Hunter",
        info: "In a world where Hunters specialize in extraordinary abilities, Gon Freecss sets out to find his missing father, a legendary Hunter. He takes the Hunter Exam and befriends fellow examinees."
    },
    {
        name: "Code Geass: Lelouch of the Rebellion",
        info: "Lelouch Lamperouge, a seemingly ordinary student, acquires the Geass power, an ability to command anyone to obey his absolute order once. Vowing to destroy the Britannian Empire that took everything from him, Lelouch uses his Geass to become a masked vigilante known as Zero and lead a rebellion against the empire."
    },
    {
        name: "Gintama",
        info: "In an Edo period overrun by aliens called Amanto, samurai Gintoki Sakata takes on odd jobs with his companions Shinpachi Shimura and Kagura to make ends meet. The series is known for its blend of action, comedy, and historical parody."
    },
    {
        name: "Psycho-Pass",
        info: "In a future where technology measures a person's mental state to predict criminal potential, Akane Tsunemori, a new inspector, joins the Public Safety Bureau's Criminal Investigation Division. She encounters Shinya Kougami, an inspector haunted by his past, and together they explore the complexities of the Psycho-Pass system and the true nature of justice."
    },
    {
        name: "Parasyte -the maxim-",
        info: "Shinichi Izumi, a high school student, becomes infected by an alien parasite that takes over his right hand. He must learn to coexist with the parasite, Migi, and fight against other parasitic creatures that threaten humanity."
    },
    {
        name: "JoJo's Bizarre Adventure",
        info: "JoJo's Bizarre Adventure is a long-running series that follows the story of the Joestar family, a bloodline of descendants who possess supernatural abilities. Each part of the series features a different JoJo facing off against a powerful villain and their Stand, a manifestation of their fighting spirit."
    },
    {
        name: "Monster",
        info: "Kenzo Tenma, a brilliant neurosurgeon, prioritizes saving a young boy over a prominent politician. The politician dies, and the boy, Johan Liebert, goes missing. Years later, a series of murders plague the city, and Tenma realizes Johan is behind them. He dedicates himself to finding Johan and stopping his reign of terror."
    },
    {
        name: "The Promised Neverland",
        info: "Emma, Norman, and Ray are orphans living in a seemingly idyllic orphanage called Grace Field House. However, they discover a dark truth about the orphanage and the fate that awaits its residents. They must devise a plan to escape and lead their fellow orphans to freedom."
    },
    {
        name: "The Garden of Words",
        info: "Takao Akizuki, a 15-year-old aspiring shoemaker, skips school on a rainy day to sketch shoes in a beautiful garden. He encounters Yukino Yukari, a mysterious older woman, and they begin to meet regularly in the garden during the rainy season. The film is a beautifully animated and emotional story about connection, solitude, and pursuing one's dreams."
    },
    {
        name: "Black Butler",
        info: "Ciel Phantomhive, a young orphaned earl, makes a deal with a demon butler named Sebastian Michaelis. In exchange for Sebastian's service, Ciel offers his soul. Together, they navigate the corrupt world of the Victorian era, solving mysteries and seeking revenge for Ciel's family."
    },
    {
        name: "Your Name Engraved in April",
        info: "Set in the 1990s, the story follows two teenagers, Miyamura and Fukatsuki, who form a bond over their shared love for music. However, their relationship is tested by past traumas and misunderstandings. The series explores themes of grief, friendship, and the importance of communication."
    },
    {
        name: "Anohana: The Flower We Saw That Day",
        info: "Jinta Yadomi, a reclusive teenager, is haunted by a childhood friend, Menma, who appears as a ghost. Menma claims she has one unfulfilled wish, and Jinta reunites with his childhood friends to help her complete it. The series delves into the themes of childhood memories, loss, and the power of friendship."
    },
    {
        name: "Serial Experiments Lain",
        info: "Lain Iwakura, a quiet and introverted girl, receives an email from her classmate who has committed suicide. The email contains a mysterious program, and Lain finds herself drawn deeper into a digital world that blurs the lines between reality and cyberspace."
    },
    {
        name: "Neon Genesis Evangelion: Rebuild of Evangelion",
        info: "A reimagining of the original Neon Genesis Evangelion series, the Rebuild movies offer a new take on the story of Shinji Ikari and his fight against the Angels. With updated animation and some changes to the plot, the Rebuild movies provide a fresh perspective on the classic anime."
    },
    {
        name: "Excel Saga",
        info: "Excel Saga is a parody anime known for its absurdist humor and nonsensical plot. Excel, an overenthusiastic woman, and Hyatt, a naive alien princess, travel to Earth on a quest to conquer it. However, their attempts are hilariously inept, leading to chaotic situations and plenty of laughs."
    },
    {
        name: "Princess Mononoke",
        info: "From Studio Ghibli, Princess Mononoke is a fantasy epic set in medieval Japan. Ashitaka, a cursed prince, becomes entangled in a conflict between the forest gods and humans who encroach upon their territory. The film explores themes of environmentalism, war, and the balance of nature."
    },
    {
        name: "Baccano!",
        info: "Baccano! is a fast-paced and action-packed anime with a non-linear narrative. Set in the early 20th century, the story follows multiple characters whose lives intertwine through a series of events involving an immortality elixir, gangsters, and alchemists."
    },
    {
        name: "Sword Art Online",
        info: "Thousands of players log in to a virtual reality game called Sword Art Online, only to find themselves trapped. To escape, they must conquer all 100 floors of the game world. Kirito, a skilled player, teams up with others to fight their way through the game and find a way back to reality."
    },
    {
        name: "K-On!",
        info: "K-On! is a slice-of-life anime that follows a group of four friends who form a light music club at their high school. The series focuses on their everyday activities, from practicing music to hanging out and enjoying their school life. It's known for its heartwarming and cute moments."
    },
    {
        name: "Clannad: After Story",
        info: "Clannad: After Story is a sequel to Clannad. It picks up after the events of the first season and focuses on the life of Tomoya and Nagisa after high school. The series explores themes of adulthood, relationships, and the challenges of life beyond school."
    },
    {
        name: "Eureka Seven",
        info: "Renton Thurston, a teenager living in a world of mecha battles, discovers a mysterious Nirvash mecha and a pilot named Eureka. Together, they join a ragtag group of mercenaries known as the Gekkostate State and fight against a hostile alien force."
    },
    {
        name: "Steins;Gate",
        info: "Rintaro Okabe, a self-proclaimed mad scientist, stumbles upon a way to send messages back in time using a modified microwave. He and his friends form the Future Gadget Laboratory and experiment with time travel, facing the consequences of altering the past."
    },
    {
        name: "Toradora!",
        info: "Ryuuji Takasu, a gentle boy with a fierce appearance, and Taiga Aisaka, a petite girl with a fiery personality, form an unlikely alliance. They decide to help each other with their respective crushes, leading to hilarious situations and a blossoming romance between them."
    },
    {
        name: "Monogatari Series",
        info: "Monogatari Series is a collection of anime adaptations of light novels, known for its unique visual style and dialogue-heavy storytelling. The series follows Koyomi Araragi, a high school student who encounters various girls with supernatural problems, and helps them overcome their struggles."
    },
    {
        name: "Space Dandy",
        info: "Space Dandy is a comedic space adventure anime. Dandy, a dandy space hunter, travels the galaxy with his robotic companion QT and his spacefaring cat Meow, searching for rare aliens to collect a reward. The series is episodic and filled with wacky humor and bizarre adventures."
    },
    {
        name: "Made in Abyss",
        info: "Riko, a young girl living in a town built around a mysterious giant hole called the Abyss, dreams of becoming a Cave Raider and exploring its depths. When she discovers her robotic companion Reg, they embark on a dangerous journey into the Abyss, unaware of the horrors that await them."
    },
    {
        name: "Millennium Actress",
        info: "A former actress, now retired and living in seclusion, is approached by a documentary filmmaker who wants to make a film about her life. The film delves into the actress' memories, blurring the lines between reality and fiction, and explores themes of love, loss, and the power of cinema."
    },
    {
        name: "Violet Evergarden",
        info: "Violet Evergarden, a former child soldier, is left physically and emotionally scarred after the war. She joins a postal company and begins working as an Auto Memories Doll, a person who writes letters for others. Through her work, Violet learns about human emotions and the power of words."
    },
    {
        name: "The Tatami Galaxy",
        info: "Watashi, a college student, regrets his choices and believes he's living in the wrong college life. He uses a time machine to relive his second year, joining different clubs and making different decisions. However, he soon realizes that happiness doesn't come from external factors but from appreciating the present moment."
    },
    {
        name: "A Place Further Than the Universe",
        info: "Mari Tamaki, a shy and introverted high school student, joins a club dedicated to going to Antarctica after her friend Shirase Kobuchizawa loses her mother who dreamed of traveling there. The series follows their journey as they face challenges and forge bonds of friendship."
    },
    {
        name: "Mushishi",
        info: "Ginko, a traveling Mushi Master, investigates mysterious occurrences caused by Mushi, formless lifeforms that exist between plants and animals. Each episode features a standalone story as Ginko encounters different people affected by Mushi and helps them find solutions."
    },
    {
        name: "Ranking of Kings",
        info: "Bojji, a deaf prince with a frail body, is ridiculed and underestimated by his kingdom. However, Bojji possesses a kind heart and a strong will. He befriends Kage, a mysterious shadow warrior, and together they strive to prove their worth and achieve their dreams."
    },
    {
        name: "Frieren: Beyond Journey's End",
        info: "After defeating the Demon King alongside her companions, the elf Frieren gains immortality. Centuries later, she embarks on a journey to reunite with her former comrades, each having aged differently due to her immortality."
    },
    {
        name: "Bleach",
        info: "Ichigo Kurosaki, a teenager with the ability to see spirits, becomes a Substitute Soul Reaper after encountering Rukia Kuchiki, a Soul Reaper who battles evil spirits called Hollows. Ichigo gains her powers and takes on the duty of protecting his town from Hollows."
    },
    {
        name: "A Silent Voice",
        info: "Shoya Ishida, a former elementary school bully, seeks redemption years after he tormented a deaf classmate, Shoko Nishimiya, who ultimately transferred schools. The film explores themes of bullying, guilt, and the importance of communication and forgiveness."
    },
    {
        name: "Mob Psycho 100",
        info: "Shigeo Kageyama, a.k.a. Mob, is an unassuming middle schooler with immense psychic powers. He struggles to repress his emotions to keep his powers in check, but when his emotions reach 100%, his powers explode! The series follows Mob as he navigates the challenges of adolescence while learning to control his abilities."
    },
    {
        name: "One-Punch Man",
        info: "Saitama is a bored superhero who can defeat any opponent with a single punch. He trains relentlessly to become stronger but finds himself unsatisfied by the lack of challenge. The series follows Saitama's comedic adventures as he searches for a worthy opponent and mentors a cyborg named Genos."
    },
    {
        name: "Fruits Basket",
        info: "Tohru Honda, an orphaned high school girl, finds herself living with the mysterious Sohma family. The Somas have a secret: they are possessed by the spirits of the zodiac animals, transforming into their animal forms when stressed or hugged by the opposite sex. Tohru's kindness and optimism gradually help the Somas break free from the curse and their emotional burdens."
    },
    {
        name: "Hunter x Hunter",
        info: "Gon Freecss, a young boy, dreams of following in his father's footsteps and becoming a Hunter, a licensed treasure seeker, investigator, or bounty hunter. He leaves his home to take the Hunter Exam and on his journey encounters Killua Zoldyck, Kurapika, and Leorio Paradinight, forming a strong friendship with them."
    },
    {
        name: "Haikyuu!!",
        info: "Shoyo Hinata, a short boy with a burning passion for volleyball, joins his high school's volleyball club despite their weakness. He vows to overcome his limitations and defeat his arrogant teammate, Tobio Kageyama, a talented setter. The series follows the growth and determination of the team as they strive to become national champions."
    },
    {
        name: "Fullmetal Alchemist: Brotherhood",
        info: "Considered a superior adaptation to the original anime, Fullmetal Alchemist: Brotherhood follows the story of Edward and Alphonse Elric, two alchemist brothers who attempt to bring their mother back to life through alchemy, a forbidden technique. The series explores themes of sacrifice, redemption, and the consequences of defying the laws of nature."
    },
    {
        name: "Demon Slayer: Kimetsu no Yaiba",
        info: "Tanjiro Kamado, a kindhearted boy, finds his family slaughtered by demons. His younger sister Nezuko is turned into a demon but retains her humanity. Tanjiro vows to avenge his family and find a cure for Nezuko. He trains to become a Demon Slayer and embarks on a dangerous journey to defeat the demons and protect his sister."
    },
    {

        name: "Gurren Lagann",
        info: "In a subterranean village powered by a mysterious energy source called Spiral Power, Simon, a timid digger, and Kamina, a hot-blooded leader, discover a giant robot called Gurren Lagann. They fight their way to the surface world, encountering a powerful enemy force that oppresses humanity. Gurren Lagann is a high-octane anime known for its over-the-top action, mecha battles, and themes of perseverance and pursuing one's dreams."
    },
    {
        name: "Neon Genesis Evangelion",
        info: "Giant alien beings known as Angels threaten humanity. To combat them, teenagers synchronize with giant bio-machines called Evangelions. Shinji Ikari, a reluctant young boy, is chosen to be an Evangelion pilot. The series explores complex themes of psychology, existentialism, and the human condition."
    },
    {
        name: "Spice and Wolf",
        info: "Kraft Lawrence, a traveling merchant, encounters Holo, a pagan wolf deity disguised as a young woman. Holo offers to help Lawrence with his business ventures in exchange for safe passage north to her homeland. The series follows their journey across a medieval European-inspired world, filled with economic intrigue, adventure, and a blossoming relationship between a wise wolf deity and a cunning merchant."
    },
    {
        name: "Odd Taxi",
        info: "A unique and quirky mystery anime with an anthropomorphic animal cast. Hiroshi Odokawa, a walrus taxi driver, picks up passengers with hidden agendas a shy idol, a violent yakuza member, a college student. The series unfolds like a puzzle, slowly revealing a larger conspiracy."
    },
    {
        name: "The Great Pretender ",
        info: "A stylish and entertaining con-man anime. Makoto Edamura, a seemingly ordinary Japanese tourist, gets entangled in the world of international scams by the brilliant con artist Laurent Thierry. The series follows their exciting adventures as they pull off elaborate schemes and encounter colorful characters."
    }
]
showData(dataSet)

function showData(dataArry) {
    let documentfrag = document.createDocumentFragment()
    for (let i = 0; i < dataArry.length; i++) {
        let card = document.createElement("div")
        card.classList.add("card")
        let cardHead = document.createElement("h2")
        cardHead.innerHTML = dataArry[i].name
        let cardBody = document.createElement("p")
        cardBody.innerHTML = dataArry[i].info
        card.appendChild(cardHead)
        card.appendChild(cardBody)
        documentfrag.appendChild(card)
    }
    container.appendChild(documentfrag)
}
search.addEventListener("input", (e) => {
    let char = (e.target.value).toLowerCase()
    char = char.trim()
    container.innerHTML = ""
    let subSet = dataSet.filter((x) => {
        let title = x.name.toLocaleLowerCase()
        if (title.includes(char)) {
            return (x)
        }
    })
    showData(subSet)
})

