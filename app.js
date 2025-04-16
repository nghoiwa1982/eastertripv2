const tripData = {
  title: "復活節旅行：成都+重慶七日之旅",
  subtitle: "親子與好友混合行程",
  description: "這趟六日行程加上返程日將帶您遊覽成都與重慶最精彩的景點，體驗獨特的巴蜀文化、山城風光與美食。從成都的大熊貓到重慶的山城步道，每一天都充滿了驚喜與美好的回憶。",
  days: [
    {
      day: 1,
      date: "4月18日（週五）",
      title: "抵達成都，市區探索",
      description: "抵達成都雙流機場，前往酒店休息後，探索成都寬窄巷子與小通巷，晚上欣賞川劇變臉表演，品嚐成都特色美食。",
      schedule: [
        { time: "11:15 - 13:45", activity: "抵達成都雙流機場", details: "搭乘計程車前往酒店" },
        { time: "抵達後", activity: "酒店 Check-in", details: "" },
        { time: "15:30 - 17:30", activity: "成都寬窄巷子、小通巷", details: "川劇變臉表演\n• 親子組: 糖畫 DIY、熊貓郵局寄明信片\n• 好友組: 鶴鳴茶社喝茶、看川劇變臉（蜀韻園 18:00 場次）" },
        { time: "18:30", activity: "晚餐", details: "於寬窄巷子旁魁星樓美食街\n• 推薦: 饕林（必點非遺活渡魚免辣版，兒童餐免費）、加薪" },
        { time: "21:00", activity: "春熙路華興街、太古里商場", details: "甜品\n• 賴湯圓（熊貓湯圓、熊貓雪糕）\n• 地址：春熙路華興街" }
      ],
      accommodation: "成都太古里 IFS 國金中心亞朵 X 酒店（第 1/2 晚）\n地址：錦江區華興東街63號1棟",
      attractions: [
        {
          name: "成都寬窄巷子",
          description: "寬窄巷子是位於中國四川省成都市的一個歷史文化區，由寬巷子、窄巷子和井巷子三條老街組成，以其保存完好的清朝風格四合院聚集區而聞名。這裡融合了傳統文化與現代商業，是體驗成都休閒生活方式的絕佳去處。",
          imageUrl: "https://image.cdn-eztravel.com.tw/7HZVuyitmXp2ZdSB_6nLCXxKFeYvxkCsgsM2TD_FZgc/g:ce/aHR0cHM6Ly92YWNhdGlvbi5jZG4tZXp0cmF2ZWwuY29tLnR3L2ltZy9WRFIvQ05fNzc5ODQ0NDQyLmpwZw.jpg",
          highlights: ["保存完好的清朝建築", "特色手工藝品和紀念品", "傳統小吃和茶館", "文化演出如川劇變臉"]
        }
      ]
    },
    {
      day: 2,
      date: "4月19日（週六）",
      title: "成都：熊貓與古堰",
      description: "全日遊覽都江堰景區和熊貓谷，體驗千年水利工程的智慧和可愛國寶熊貓的魅力。",
      schedule: [
        { time: "全日", activity: "熊貓谷 + 都江堰景區 一日遊", details: "包團" },
        { time: "07:00", activity: "出發", details: "酒店接送" },
        { time: "09:30 - 12:00", activity: "熊貓谷", details: "重點: 月亮產房幼崽 → 太陽產房 → 小熊貓生態館（避開人群密集區）" },
        { time: "13:00", activity: "午餐", details: "行程中未註明，可能包含在包團內或自理" },
        { time: "14:00 - 17:00", activity: "都江堰景區", details: "路線: 秦堰樓俯瞰全景 → 安瀾索橋拍照 → 南橋江邊喝茶" },
        { time: "19:30", activity: "行程結束", details: "於成都琴台路統一散團" },
        { time: "晚上", activity: "晚餐", details: "行程中未註明，需自行安排" }
      ],
      accommodation: "成都太古里 IFS 國金中心亞朵 X 酒店（第 2/2 晚）\n地址：錦江區華興東街63號1棟",
      attractions: [
        {
          name: "熊貓谷",
          description: "又稱都江堰野放繁育研究中心，是成都大熊貓繁育研究基地的分支，主要負責大熊貓等瀕危珍稀野生動物的野化訓練、放歸和繁育工作。園區內有大熊貓生態獸舍、小熊貓生態放養區和回歸產房等設施。",
          imageUrl: "https://dimg04.c-ctrip.com/images/1me3z12000cr81lxjDE43_R_640_10000_Q90.jpg?proc=source/tripcommunity",
          highlights: ["月亮產房幼崽區", "太陽產房", "小熊貓生態館", "野化訓練設施"]
        },
        {
          name: "都江堰景區",
          description: "都江堰是中國保存最完整的古代水利工程，至今仍在使用。它由秦國蜀郡太守李冰及其子於公元前256年左右修建。都江堰位於四川省都江堰市城西的岷江上游，由魚嘴分水堤、飛沙堰溢洪道和寶瓶口引水口三大主體工程構成。",
          imageUrl: "https://gd.huaxia.com/upload/resources/image/2021/08/22/143847.jpeg",
          highlights: ["魚嘴分水堤", "飛沙堰溢洪道", "寶瓶口引水口", "安瀾索橋"]
        }
      ]
    },
    {
      day: 3,
      date: "4月20日（週日）",
      title: "樂山大佛 & 前往重慶",
      description: "上午遊覽世界文化遺產樂山大佛，下午乘坐高鐵前往重慶，抵達後參觀著名的洪崖洞夜景。",
      schedule: [
        { time: "08:00 - 16:00", activity: "樂山大佛遊覽", details: "包團" },
        { time: "18:23 - 19:30", activity: "交通：成都 → 重慶", details: "共乘高鐵 G8633 (成都東站 至 重慶沙坪壩站) (兩組家庭同住)" },
        { time: "20:00", activity: "抵達重慶 & 酒店 Check-in", details: "" },
        { time: "20:30", activity: "洪崖洞夜景", details: "亮燈時間: 19:00 - 23:00\n• 拍攝技巧: 乘電梯至 1 樓馬路對面拍全景\n• 避開人潮: 19:30 亮燈前 10 分鐘佔位" },
        { time: "晚上", activity: "晚餐 (於洪崖洞夜景後)", details: "於解放碑路附近\n• 推薦: 丁孃孃火鍋 (洪崖洞店 - 滄白路48號南國麗景2樓)、儲奇門鱔魚火鍋 (解放碑店 - 順城街39號鑽石星座商務大廈2樓)" }
      ],
      accommodation: "重慶大集 Pagoda 君亭設計酒店 (解放碑洪崖洞店) (第 1/4 晚)\n地址：渝中區民生路235號附1號",
      attractions: [
        {
          name: "樂山大佛",
          description: "樂山大佛，又名嘉州凌雲寺大彌勒石像，位於四川省樂山市岷江、青衣江、大渡河三江交匯處，是世界現有最高的石佛像。開鑿於唐代開元元年（713年），貞元十九年（803年）完工，歷時約九十年。",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Leshan_grosser_buddha.JPG/250px-Leshan_grosser_buddha.JPG",
          highlights: ["總高71米的彌勒佛石像", "世界文化與自然雙重遺產", "三江交匯壯觀景色", "精巧的排水系統設計"]
        },
        {
          name: "洪崖洞",
          description: "洪崖洞是位於重慶市渝中區的商業景區，以仿照傳統吊腳樓風格的主體建築而聞名。全名為洪崖洞民俗風貌區，是集觀光旅遊、休閒度假等功能於一身的旅遊區。主體建築依山而建，共有11層，呈現出獨特的山城建築風格。",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ce/%E9%87%8D%E5%BA%86%E6%B4%AA%E5%B4%96%E6%B4%9E.jpg",
          highlights: ["傳統吊腳樓建築", "絢麗多彩的夜景", "巴渝風情街", "多層次的商業文化休閒空間"]
        }
      ]
    },
    {
      day: 4,
      date: "4月21日（週一）",
      title: "重慶：山城步道與長江索道",
      description: "體驗重慶獨特的山城風貌，遊覽山城巷、十八梯和白象街，搭乘長江索道欣賞長江風光，參觀龍門浩老街。",
      schedule: [
        { time: "09:00 - 12:00", activity: "山城巷 → 十八梯 → 白象街", details: "走 \"領事巷 → 仁愛堂\" 下坡路線，打卡懸崖咖啡館、老重慶展覽館" },
        { time: "12:30", activity: "午餐", details: "• 推薦: 步道入口 \"周師兄火鍋\" (鴛鴦鍋 + 蛋炒飯)、楊記隆府 (白象街店)" },
        { time: "14:30 - 17:00", activity: "長江索道 + 龍門浩老街", details: "乘索道【上新街·索道南站 至 新華路·索道北站】，逛龍門浩 \"既下山\" 下午茶 (觀渝中半島全景)，玻璃觀景台" },
        { time: "18:30", activity: "洪崖洞夜景", details: "亮燈時間: 19:00 - 23:00\n• 拍攝技巧: 乘電梯至 1 樓馬路對面拍全景\n• 避開人潮: 19:30 亮燈前 10 分鐘佔位" },
        { time: "18:30", activity: "晚餐", details: "於觀音橋步行街美食街\n• 推薦: 壺灶·江岸老火鍋 (洪崖洞江景店 - 嘉陵江濱江路蜜岸商業特色街10軸-16軸商鋪)、一眼重慶 (重慶全景烤肉餐酒吧)" }
      ],
      accommodation: "重慶大集 Pagoda 君亭設計酒店 (解放碑洪崖洞店) (第 2/4 晚)\n地址：渝中區民生路235號附1號",
      attractions: [
        {
          name: "山城巷",
          description: "山城巷是重慶市渝中區的一條具有典型山城特色的歷史街巷，最初名為天燈巷。它是重慶山城步道中具代表性的一段，全程為斜坡青石板梯道，連接上下半城，有斑駁的舊牆和濃厚的生活氣息。",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a3/%E5%B1%B1%E5%9F%8E%E5%B7%B7%E4%B8%8A%E5%8C%BA.jpg",
          highlights: ["具代表性的山城步道", "法國仁愛堂舊址", "厚廬建築", "懸崖咖啡館"]
        },
        {
          name: "長江索道",
          description: "長江索道是重慶市的著名地標，往返於重慶市渝中區的新華路和南岸區的上新街之間，於1987年開始營運。索道全長1166米，運行速度為每秒6米，單程運行時間約4分30秒，提供橫跨長江的獨特交通和觀光體驗。",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Chongqing_Changjiang_Cableway.jpg/1200px-Chongqing_Changjiang_Cableway.jpg",
          highlights: ["空中俯瞰長江兩岸風光", "體驗重慶獨特交通方式", "歷史悠久的城市地標", "拍攝重慶城市全景的絕佳位置"]
        },
        {
          name: "十八梯",
          description: "十八梯是位於重慶市渝中區的傳統風貌區，經過保護和改造後，於2021年重新對公眾開放。這裡保留了原有的七街六巷十八景，展現老重慶的生活面貌和歷史文化，是連接上下半城的重要通道。",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/%E5%8D%81%E5%85%AB%E6%A2%AF%E8%80%81%E8%A1%97_-_Old_Street_in_Shibati_Area_-_2015.04_-_panoramio.jpg",
          highlights: ["傳統山城建築", "七街六巷十八景", "山城記憶館", "歷史文化展示"]
        }
      ]
    },
    {
      day: 5,
      date: "4月22日（週二）",
      title: "重慶：特色交通與休閒",
      description: "體驗重慶特色的交通方式，參觀李子壩輕軌穿樓奇觀，遊覽鵝嶺二廠創意園區，下午探訪重慶南山。",
      schedule: [
        { time: "10:00", activity: "李子壩輕軌穿樓 + 鵝嶺二廠", details: "• 親子組: 穿樓圖書館買 3D 立體書，二廠 \"小黃樓\" 拍復古全家福\n• 好友組: 江畔咖啡廳觀景" },
        { time: "中午", activity: "午餐", details: "• 推薦: 李子壩梁山雞 (長嘉匯四雞哥店)" },
        { time: "14:00", activity: "重慶南山", details: "自由探索或特定活動" },
        { time: "下午", activity: "朋友行程", details: "朋友前往江北機場 (部分成員可能離隊)" },
        { time: "18:30", activity: "晚餐", details: "於觀音橋步行街美食街" }
      ],
      accommodation: "重慶大集 Pagoda 君亭設計酒店 (解放碑洪崖洞店) (第 3/4 晚)\n地址：渝中區民生路235號附1號",
      attractions: [
        {
          name: "李子壩輕軌穿樓",
          description: "李子壩輕軌穿樓是重慶軌道交通2號線的著名特色，輕軌從一棟19層建築的6樓至8樓穿過，展現了重慶特殊的地形與城市發展的結合。雖然輕軌與樓房結合，但結構上實際是相互獨立的，並採用了低噪音和低振動設備減少對居民的影響。",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/%E6%9D%8E%E5%AD%90%E5%9D%9D%E7%AB%99%E8%BD%BB%E8%BD%A8%E7%A9%BF%E6%A5%BC_0023.png",
          highlights: ["獨特的輕軌穿樓設計", "巴渝舊聞館展示", "觀景平台", "城市建築與交通結合的奇觀"]
        },
        {
          name: "鵝嶺二廠",
          description: "鵝嶺二廠文創公園前身是民國時期的中央銀行印鈔廠，後成為重慶印製二廠。2015年開始建設為文創園區，保留了原有工業建築的特色，融合創意文化，成為集藝術展覽、文創購物、餐飲休閒於一體的文化創意空間。",
          imageUrl: "https://p3.itc.cn/images01/20230105/96757d02c4c548f7ad2834ad8c39324f.jpeg",
          highlights: ["保留工業建築風格", "T²國際當代藝術中心", "愛情天台", "文創商店與特色咖啡館"]
        },
        {
          name: "重慶南山",
          description: "重慶南山古名「塗山」，位於長江南岸，是重慶市的「肺葉」，以其層巒疊嶂、林木蒼翠的景色而聞名。這裡是登山愛好者和觀光客的理想去處，有多個景點如一棵樹觀景台、南山植物園等。",
          imageUrl: "https://www.hlhbsc.org/upload/download/Spot_pic/Spot_picfile_000319_New.jpg",
          highlights: ["一棵樹觀景台", "南山植物園", "塗山寺", "抗戰遺址博物館"]
        }
      ]
    },
    {
      day: 6,
      date: "4月23日（週三）",
      title: "重慶 → 武隆 → 重慶：自然奇觀",
      description: "全日遊覽武隆地區的自然奇觀，包括天生三橋、龍水峽地縫和仙女山國家森林公園，欣賞喀斯特地貌和山地草原風光。",
      schedule: [
        { time: "全日", activity: "武隆：天生三橋 / 龍水峽地縫 / 仙女山", details: "包團 (好友返程日，您過渡休整)" },
        { time: "08:00", activity: "出發前往武隆", details: "包車 (7 座商務車)，車程約 2.5 小時 (備註：備兒童動畫片、零食)\n• 途中停留: 烏江畫廊觀景台 (20 分鐘拍照)" },
        { time: "11:00 - 14:00", activity: "天生三橋", details: "• 親子路線: 電梯直下天龍天坑 → 徒步青龍橋 (找《變形金剛》龍雕塑) → 電瓶車至出口 (15 元/人省力)\n• 互動: 下載 \"武隆 AR 導覽\"，用動畫吸引孩子探索地縫成因" },
        { time: "午餐", activity: "午餐", details: "於仙女山鎮 \"農夫人家\"\n• 推薦: 洋芋飯 + 玉米排骨湯" },
        { time: "15:30", activity: "遊覽仙女山國家森林公園景區", details: "仙女山大草原\n• 乘小火車餵羊駝 → 滑草 (30 元/次) → 樹頂漫步 (玻璃棧道拍照)" },
        { time: "晚上", activity: "返回重慶", details: "包車返回" }
      ],
      accommodation: "重慶大集 Pagoda 君亭設計酒店 (解放碑洪崖洞店) (第 4/4 晚)\n地址：渝中區民生路235號附1號",
      attractions: [
        {
          name: "天生三橋",
          description: "武隆天生三橋是位於重慶市武隆區的著名景點，由天龍橋、青龍橋、黑龍橋三座氣勢磅礴的天然石拱橋組成，是亞洲最大的天生橋群之一。三座橋樑平行橫跨在羊水河峽谷上，形成了「三橋夾兩坑」的奇特景觀。",
          imageUrl: "https://image.cdn-eztravel.com.tw/JkRzQf9HxWHz0P2k_yqNoY9NFOrxo_bTyrgBD2pSF9o/g:ce/aHR0cDovL3ZhY2F0aW9uLmNkbi1lenRyYXZlbC5jb20udHcvaW1nL1ZEUi9DTl81MDQ0MjE4OTEuanBn.jpg",
          highlights: ["三座雄壯天然石拱橋", "天龍天坑和神鷹天坑", "《變形金剛4》取景地", "世界自然遺產"]
        },
        {
          name: "龍水峽地縫",
          description: "龍水峽地縫是位於重慶市武隆區的喀斯特峽谷地貌景觀，為「武隆喀斯特」世界自然遺產地的重要組成部分。峽谷全長5公里，深200至500米，兩側懸崖峭壁，景觀壯麗，有銀河飛瀑、九灘十八潭等景點。",
          imageUrl: "https://i0.wp.com/bobotravel.tw/wp-content/uploads/2018/07/batch_473A4635-1.jpg",
          highlights: ["峽谷兩側懸崖峭壁", "溪水瀑布景觀", "銀河飛瀑", "獨特的喀斯特地貌"]
        },
        {
          name: "仙女山國家森林公園",
          description: "武隆仙女山國家森林公園是國家AAAAA級旅遊景區，地處武陵山脈，海拔介於1650米至2033米之間。公園森林覆蓋面積達33萬畝，天然草原10萬畝，以其林海、奇峰、草場、雪原等景觀聞名，被譽為「南國牧原」和「東方瑞士」。",
          imageUrl: "http://cqwl.gov.cn/bmjz_sites/bm/wlw/zwxx_98939/jqjd/jdjd_1/202007/W020200702397694935480.jpg",
          highlights: ["廣闊的天然草原", "茂密的森林景觀", "高山旅遊設施", "四季各異的自然風光"]
        }
      ]
    },
    {
      day: 7,
      date: "4月24日（週四）",
      title: "重慶市區 & 返程",
      description: "上午在重慶市區最後的自由時間，逛解放碑步行街和觀音橋步行街美食街，下午前往機場搭機返程。",
      schedule: [
        { time: "09:00 - 11:00", activity: "解放碑步行街 + 觀音橋步行街美食街", details: "市區最後採買或閒逛" },
        { time: "中午", activity: "午餐", details: "於觀音橋步行街美食街" },
        { time: "16:00", activity: "前往機場", details: "抵達重慶後 (指上午活動結束後) 直奔江北機場" },
        { time: "17:30 - 19:55", activity: "離開重慶", details: "搭乘飛機 重慶 → 深圳" }
      ],
      accommodation: "無（返程日）",
      attractions: [
        {
          name: "解放碑步行街",
          description: "解放碑步行街是重慶市中心一處繁華的商業街，以解放碑為中心，周邊包含了民權路、鄒容路、八一路和五一路等地。這裡匯集了眾多百貨公司、酒店和餐館，是重慶的時尚地標，也是遊客購物和品嚐美食的熱門地點。",
          imageUrl: "http://cq.people.com.cn/NMediaFile/2020/0508/LOCAL202005081048000043093097208.jpg",
          highlights: ["解放碑地標", "眾多品牌商店", "美食餐廳林立", "重慶城市中心商業區"]
        },
        {
          name: "觀音橋步行街",
          description: "觀音橋步行街是重慶市江北區的一個著名商圈，也是重慶市最繁華的商業街區之一。這裡匯集了眾多的百貨公司，如新世界百貨、新世紀百貨、大融城等，以及各類國際品牌、時尚潮流店和特色小吃，是重慶八大新地標之一。",
          imageUrl: "https://i.ytimg.com/vi/nF2_KsBRKOo/maxresdefault.jpg",
          highlights: ["多元化購物體驗", "豐富的餐飲選擇", "現代化商業設施", "重慶地方特色"]
        }
      ]
    }
  ]
};

function App() {
  const [activeDay, setActiveDay] = React.useState(1);
  const [currentView, setCurrentView] = React.useState('overview'); // 'overview', 'details', 'gallery'
  
  const currentDayData = tripData.days.find(day => day.day === activeDay);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero 
          title={tripData.title}
          subtitle={tripData.subtitle}
          description={tripData.description}
        />
        
        <div className="container mx-auto px-4 py-8">
          {/* Navigation buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button 
              onClick={() => setCurrentView('overview')}
              className={`px-6 py-3 rounded-lg transition-all ${
                currentView === 'overview' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              行程總覽
            </button>
            <button 
              onClick={() => setCurrentView('details')}
              className={`px-6 py-3 rounded-lg transition-all ${
                currentView === 'details' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              每日詳情
            </button>
            <button 
              onClick={() => setCurrentView('gallery')}
              className={`px-6 py-3 rounded-lg transition-all ${
                currentView === 'gallery' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              景點圖集
            </button>
          </div>
          
          {/* Day selector */}
          <div className="flex overflow-x-auto pb-4 mb-8 gap-4">
            {tripData.days.map(day => (
              <DayCard 
                key={day.day}
                day={day.day}
                date={day.date}
                title={day.title}
                isActive={activeDay === day.day}
                onClick={() => setActiveDay(day.day)}
              />
            ))}
          </div>
          
          {/* Content based on selected view */}
          {currentView === 'overview' && (
            <div className="fade-in">
              <h2 className="text-2xl font-bold mb-6">行程總覽</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tripData.days.map(day => (
                  <div 
                    key={day.day}
                    className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      setActiveDay(day.day);
                      setCurrentView('details');
                    }}
                  >
                    <h3 className="text-lg font-bold mb-1">Day {day.day}: {day.title}</h3>
                    <p className="text-gray-600 mb-3">{day.date}</p>
                    <p className="text-gray-800">{day.description}</p>
                    
                    <div className="mt-4">
                      <p className="text-sm text-gray-500 mb-2">主要景點：</p>
                      <div className="flex flex-wrap gap-2">
                        {day.attractions.map((attraction, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                          >
                            {attraction.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {currentView === 'details' && currentDayData && (
            <div className="fade-in">
              <div className="bg-white border border-gray-200 rounded-lg mb-8">
                <div className="border-b border-gray-200 px-6 py-4">
                  <h2 className="text-2xl font-bold">Day {currentDayData.day}: {currentDayData.title}</h2>
                  <p className="text-gray-600">{currentDayData.date}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-800 mb-6">{currentDayData.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4">行程安排</h3>
                    <ScheduleTable schedule={currentDayData.schedule} />
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4">住宿資訊</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="whitespace-pre-line">{currentDayData.accommodation}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-4">景點介紹</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {currentDayData.attractions.map((attraction, index) => (
                        <AttractionCard 
                          key={index}
                          name={attraction.name}
                          description={attraction.description}
                          imageUrl={attraction.imageUrl}
                          highlights={attraction.highlights}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {currentView === 'gallery' && (
            <div className="fade-in">
              <h2 className="text-2xl font-bold mb-6">景點圖集</h2>
              <ImageGallery attractions={tripData.days.flatMap(day => day.attractions)} />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
