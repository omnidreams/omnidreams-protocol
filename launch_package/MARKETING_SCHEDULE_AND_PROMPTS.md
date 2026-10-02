# Маркетинговая стратегия, почасовое расписание и матрица промптов для запуска NVIDIA OmniDreams ($DREAMS)

Данный документ представляет собой полное операционное руководство по медиа-сопровождению, таргетированному маркетингу и генерации визуальных ассетов для запуска токена **NVIDIA OmniDreams ($DREAMS)** на платформе **Pons Launchpad v2** в сети **Robinhood Chain ($HOOD)**.

---

## 1. Глобальные торговые окна и временные зоны (Global Trading Windows)

Запуск на децентрализованных площадках требует координации между тремя ключевыми центрами крипто-ликвидности: Восточной Азией, Европой и Северной Америкой.

```
+---------------------------------------------------------------------------------------------+
|                                ГЛОБАЛЬНАЯ СЕТКА ЧАСОВЫХ ПОЯСОВ                              |
+--------------------------+----------------------------+-------------------------------------+
| Москва (MSK, UTC+3)      | Пекин / Азия (CST, UTC+8)  | Нью-Йорк / США (EST, UTC-5)         |
+--------------------------+----------------------------+-------------------------------------+
| 08:00 MSK (Утро)         | 13:00 CST (День)           | 00:00 EST (Ночь)                    |
| 12:00 MSK (День)         | 17:00 CST (Вечер)          | 04:00 EST (Раннее утро)             |
| 15:00 MSK (Золотое окно) | 20:00 CST (Азиатский пик)  | 07:00 EST (Пробуждение США)         |
| 18:00 MSK (Вечер)        | 23:00 CST (Поздний вечер)  | 10:00 EST (Открытие торгов США)     |
| 21:00 MSK (Ночь)         | 02:00 CST (Ночь)           | 13:00 EST (Американский прайм-тайм) |
+--------------------------+----------------------------+-------------------------------------+
```

### Стратегические фазы торговых окон:

1. **Окно 1: Азиатский вечерний фокус (13:00 - 16:00 MSK / 18:00 - 21:00 CST)**
   - Пик активности китайских и восточноазиатских трейдеров (WeChat-группы, GMGN Trenches, азиатские KOLs).
   - Основной упор: технический нарратив, перевод на китайский язык, привязка к токенизированным акциям $NVDA.

2. **Окно 2: Перекрестное "Золотое окно" запуска (14:30 - 17:00 MSK / 19:30 - 22:00 CST / 06:30 - 09:00 EST)**
   - Идеальный момент для публикации Contract Address (CA) и старта торгов на Pons v2.
   - Азия находится на пике вечерней торговли, Европа активна в середине рабочего дня, трейдеры из США просыпаются и мониторят утренние алерты.

3. **Окно 3: Американский прайм-тайм (18:00 - 22:00 MSK / 23:00 - 03:00 CST / 10:00 - 14:00 EST)**
   - Максимальный объем ончейн-ликвидности в сети Robinhood Chain.
   - Основной упор: отчеты о капитализации, рост объема выплат дивидендов $NVDA, пуш в англоязычных тредах и сообществах.

---

## 2. Почасовая сетка публикаций (Hour-by-Hour Timeline & Phases)

Расписание привязано к относительному таймингу $T$, где $T = 0$ обозначает момент подтверждения транзакции деплоя на Pons v2.

| Тайминг (T) | Время (MSK / CST / EST) | Тип контента | Целевая аудитория | Платформы |
| :--- | :--- | :--- | :--- | :--- |
| **T - 24h** | 14:00 MSK / 19:00 CST / 06:00 EST | Тизер мировых моделей (World Models) | AI & Crypto энтузиасты | X (Twitter) |
| **T - 12h** | 02:00 MSK / 07:00 CST / 18:00 EST | Закрепленный технический Master-тред | Исследователи, разработчики, смарт-деньги | X, GitHub, Medium |
| **T - 6h** | 08:30 MSK / 13:30 CST / 00:30 EST | Азиатский блок (English + Native 中文) | Китайские киты, GMGN Trenches | X, Telegram, WeChat |
| **T - 2h** | 12:30 MSK / 17:30 CST / 04:30 EST | T-Minus 2 Hours: готовность пула Pons v2 | Активные трейдеры Robinhood Chain | X, Telegram |
| **T - 15m** | 14:15 MSK / 19:15 CST / 06:15 EST | T-Minus 15 Minutes: финальная проверка | Снайперы, подписчики алертов | X, Telegram |
| **T = 0** | **14:30 MSK / 19:30 CST / 06:30 EST** | **LIVE ON PONS V2 + Публикация CA** | **Весь глобальный рынок** | **X, GMGN, TG, DexScreener** |
| **T + 30m** | 15:00 MSK / 20:00 CST / 07:00 EST | Тактическая волна реплаев по KOLs | Аудитория @vladtenev, @nvidia | X Replies |
| **T + 1h** | 15:30 MSK / 20:30 CST / 07:30 EST | Отчет №1: Рыночная капитализация и объем | Трейдеры ранней фазы | X, Telegram |
| **T + 4h** | 18:30 MSK / 23:30 CST / 10:30 EST | Тред: FeeEscrow и дивиденды $NVDA | Американские фонды и розничные инвесторы | X Master Thread |
| **T + 12h** | 02:30 MSK / 07:30 CST / 18:30 EST | Итоги первых 12 часов: сожженная LP и холдеры | Ночные трейдеры США и утренний Токио | X, Telegram |

---

## 3. Готовые посты и треды для публикации (Ready-to-Post Copy Blocks)

Все блоки отформатированы для копирования в 1 клик. Заменяйте плейсхолдер `[INSERT_CA_HERE]` на фактический адрес смарт-контракта после деплоя.

---

### Пост 1 (T - 24h): Тизер мировых моделей (World Models Teaser)

```text
Autonomous spatial simulation meets decentralized compute.

We are taking generative world model architectures inspired by @NVIDIA Research and deploying them directly on Robinhood Chain ($HOOD).

Simulating closed-loop synthetic environments in real time.
Backed by tokenized $NVDA stock mechanics.

Full architecture paper drops in 12 hours.

#NVIDIA #AI #Robinhood #WorldModels
```

---

### Пост 2 (T - 12h): Главный технический Master-тред (Закрепленный в профиле)

#### Твит 1/4 (Заглавный)
```text
Introducing NVIDIA OmniDreams ($DREAMS): The Generative World Model Protocol on Robinhood Chain ($HOOD) 🌌

A thread on bridging decentralized spatial simulation, real-time closed-loop synthetic physics, and tokenized $NVDA dividend mechanics. 🧵👇

1/4
```

#### Твит 2/4 (Архитектура и исследования)
```text
2/4 Traditional AI systems process static data. World models simulate dynamic physical reality.

OmniDreams leverages neural simulation pipelines to create responsive, autonomous spatial environments.

Built on EVM-native infrastructure (Robinhood Chain, Chain ID: 92001) with sub-second execution.

Architecture overview:
https://research.nvidia.com/research-area/generative-ai
```

#### Твит 3/4 (Токеномика и дивиденды $NVDA)
```text
3/4 Sustainable onchain economics:

• Quote Asset: Paired with tokenized $NVDA stock
• 1.8% Protocol Volume Tax: Automatically routed to Pons FeeEscrow
• Automated Rewards: Yield distributed in tokenized $NVDA on volume spikes
• Fair Launch: 100% supply deposited to the bonding curve on @PonsFamily v2

Zero presale. Zero insider cabals.
```

#### Твит 4/4 (Ссылки и открытый исходный код)
```text
4/4 Launching on Pons Launchpad v2.

Upon curve completion ($68K MC), 100% of liquidity is permanently locked in LaunchLocker and migrated to Uniswap v4.

GitHub: https://github.com/omnidreams/omnidreams-protocol
Telegram: https://t.me/OmniDreams_AI
Website: https://research.nvidia.com/research-area/generative-ai

Stay tuned for deployment confirmation.
```

---

### Пост 3 (T - 6h): Азиатский блок (English + Native 中文 Chinese)

```text
Bringing NVIDIA-inspired World Models to Robinhood Chain ($HOOD). 

亚洲社区看过来：NVIDIA OmniDreams ($DREAMS) 即将在 Robinhood Chain 上的 Pons v2 发射！

核心亮点 / Key Highlights:
1. 空间生成式世界模型架构（基于英伟达前沿研究）
2. 交易对锚定 Robinhood 链上代币化股票 $NVDA
3. 1.8% 创作者与交易税全部通过 FeeEscrow 转化为 $NVDA / ETH 分红
4. 100% 公平发射，无预售，毕业后流动性通过 LaunchLocker 永久锁仓并迁移至 Uniswap v4

准备好 Rabby / MetaMask (Chain ID: 92001)。

发射倒计时中：https://t.me/OmniDreams_AI
#NVIDIA #AI #Robinhood #DREAMS $NVDA $ETH
```

---

### Пост 4 (T - 2h): T-Minus 2 Hours (Инициализация смарт-контрактов)

```text
T-MINUS 2 HOURS ⏳

Preparing deployment for NVIDIA OmniDreams ($DREAMS) on @PonsFamily Launchpad v2.

Pre-flight checklist:
[x] Robinhood Chain RPC verified (Chain ID: 92001)
[x] Initial dev liquidity (0.15 ETH) queued
[x] 1.8% FeeEscrow dividend routing active
[x] 5-second 99% anti-snipe protection ready

Get your ETH and Rabby Wallet set up.

#RobinhoodChain #NVIDIA #Pons
```

---

### Пост 5 (T - 15m): T-Minus 15 Minutes (Финальная готовность)

```text
T-MINUS 15 MINUTES 🚨

Contract initialization in progress.
The fair launch bonding curve for NVIDIA OmniDreams ($DREAMS) goes live shortly.

Launchpad: https://ponsfamily.com/launchpad/create

Do not interact with fake contracts. Official Contract Address (CA) will be posted right here in 15 minutes.

#DREAMS #Robinhood
```

---

### Пост 6 (T = 0): Главный боевой анонс запуска (Launch Announcement + CA)

```text
NVIDIA OmniDreams ($DREAMS) IS NOW LIVE ON PONS V2! 🌌⚡

Bridging NVIDIA Research World Model architecture to Robinhood Chain ($HOOD).

Contract (CA):
[INSERT_CA_HERE]

Trade on Pons Launchpad:
https://www.ponsfamily.com/launchpad/[INSERT_CA_HERE]

Tokenomics:
• Total Supply: 1,000,000,000 $DREAMS
• 100% Fair Launch on Bonding Curve
• 1.8% Tax routed to FeeEscrow ($NVDA payouts)
• Starting MC: ~$3,800 | Graduation MC: ~$68,000
• LP Permanently Locked in LaunchLocker on Uniswap v4

Official Links:
Website: https://research.nvidia.com/research-area/generative-ai
Telegram: https://t.me/OmniDreams_AI

#NVIDIA #Robinhood #AI #DREAMS $NVDA $ETH
```

---

### Пост 7 (T + 1h): Отчет о первой волне объема и дивидендах $NVDA

```text
1 HOUR POST-LAUNCH UPDATE 📈

NVIDIA OmniDreams ($DREAMS) momentum on Robinhood Chain:

• Bonding Curve Progress: ACTIVE
• Market Cap: Moving past initial base valuation
• 1.8% Creator & Holder Tax: Accumulating in Pons FeeEscrow
• Anti-Snipe: Successfully completed initial block decays

Track and swap on Pons v2:
https://www.ponsfamily.com/launchpad/[INSERT_CA_HERE]

Holders earn exposure to tokenized $NVDA stock yields with every trading wave.

#DREAMS #RobinhoodChain #NVDA
```

---

### Пост 8 (T + 4h / T + 12h): Тред про FeeEscrow, дивиденды и градацию на Uniswap v4

#### Твит 1/3
```text
How the $DREAMS Dividend Engine Works: Real Yield in Tokenized $NVDA 📊

Understanding the FeeEscrow architecture powering NVIDIA OmniDreams on Robinhood Chain. 🧵👇

1/3
```

#### Твит 2/3
```text
2/3 Every buy and sell of $DREAMS routes 1.8% (180 BPS) directly to the Pons FeeEscrow distributor contract.

Instead of burning into thin air or going to static marketing wallets, fees accumulate as real assets:
• Direct claims in tokenized $NVDA and ETH
• Creator claims visible at ponsfamily.com/creator
• 100% transparent onchain routing

Volume drives dividends.
```

#### Твит 3/3
```text
3/3 What happens at Graduation ($68,000 Market Cap)?

When the bonding curve hits 100%:
1. All accumulated liquidity automatically seeds a Uniswap v4 pool
2. LP tokens are permanently burned / locked via LaunchLocker
3. Trading unlocks across the wider EVM ecosystem on Robinhood Chain

Join the movement:
https://www.ponsfamily.com/launchpad/[INSERT_CA_HERE]
```

---

## 4. Промпты для генерации визуальных ассетов (Midjourney v6, DALL-E 3, SDXL)

Для получения фотореалистичных, брендовых иллюстраций в эстетике NVIDIA Research (#76B900 Neon Green + Dark Obsidian Graphite) используйте следующие выверенные промпты.

---

### Промпт №1: Кибернетический 3D-процессор World Models (Для Главного Master-треда)

* **Назначение:** Обложка главного закрепленного треда и сайта.
* **Идея:** Квантово-кибернетический микропроцессор нового поколения с голографической проекцией физического мира.

```text
Cinematic 3D render of an ultra-futuristic NVIDIA neural microprocessor glowing with vibrant neon emerald green circuits (#76B900) and deep obsidian matte black titanium, a holographic volumetric wireframe globe of dynamic physical simulation floating above the microchip die, laser caustic refractions, intricate electronic motherboard PCB architecture, raytraced volumetric lighting, Octane render, Unreal Engine 5, 8k resolution, photorealistic, clean studio lighting, high tech computing aesthetic --ar 16:9 --style raw --v 6.0
```

---

### Промпт №2: Пространственная сингулярность и сетка Robinhood Chain (Для Азиатского блока)

* **Назначение:** Иллюстрация к твиту для китайских и азиатских трейдеров.
* **Идея:** Пространственная топологическая сетка данных, соединяющая фондовые котировки $NVDA с ончейн-протоколом.

```text
Sleek cyberpunk visualization of a decentralized financial network topology, glowing cyber green grid lines spanning across a dark hyper-modern trading terminal, floating 3D holographic data blocks displaying tokenized stock candlestick charts, spatial AI simulation spheres, cinematic depth of field, neon lime accents on dark carbon fiber texture, minimal Asian typography aesthetic in background holographic HUD, 8k, photorealistic octane rendering, sharp details --ar 16:9 --v 6.0
```

---

### Промпт №3: Радар инициализации смарт-контрактов (Для T-Minus Countdown)

* **Назначение:** Визуал для постов T-2 Hours и T-15 Minutes.
* **Идея:** Готовящийся к запуску криптографический реактор или калибровочный интерфейс.

```text
Futuristic radar control interface preparing for deployment, glowing neon green countdown indicators, cybernetic glass HUD elements displaying smart contract bytecode and cryptographic security locks, obsidian metal console, subtle lens flare, volumetric emerald atmospheric smoke, ultra sharp macro lens focus, cinematic sci-fi laboratory aesthetic, 8k resolution --ar 16:9 --v 6.0
```

---

### Промпт №4: Взрывной энерго-куб ликвидности (Для боевого анонса T = 0 Launch)

* **Назначение:** Главный визуал в момент публикации Contract Address.
* **Идея:** Мощный импульс энергии, разрывающий криптографический куб, высвобождая символ $DREAMS.

```text
Explosive burst of neon green cyber energy erupting from a shattered hyper-tech obsidian cube, glowing volumetric laser beams, floating crystalline fragments, deep dark background with subtle corporate green volumetric fog, dynamic action shot, 3D typography element glowing with ethereal light, Octane Render, Ray Tracing, 8k, breathtaking cinematic contrast --ar 16:9 --style raw --v 6.0
```

---

### Промпт №5: Голографический терминал доходности $NVDA (Для отчета об объеме)

* **Назначение:** Иллюстрация для постов с отчетами о росте капитализации и сборе дивидендов.
* **Идея:** Интерфейс ончейн-хранилища FeeEscrow с золотисто-зелеными потоками дивидендов.

```text
Futuristic financial dashboard terminal floating in a dark server room, neon emerald green and platinum metallic UI elements showing exponential liquidity inflow curves, holographic tokens flowing into an encrypted digital escrow vault, crystal clear reflections on polished dark granite, clean minimalist fintech design, 8k, cinema4d rendering --ar 16:9 --v 6.0
```

---

### Промпт №6: Хранилище ликвидности LaunchLocker и ядро Uniswap v4 (Для треда о градации)

* **Назначение:** Визуал к образовательному треду о блокировке ликвидности и миграции.
* **Идея:** Запечатанный криптографический сейф с горящим вечным зеленым замком.

```text
A massive futuristic cryptographic security vault door permanently locked with glowing neon green laser bolts, engraved with intricate geometric blockchain circuit patterns, heavy reinforced titanium and dark chrome materials, glowing Uniswap v4 and Robinhood emblems, volumetric haze, atmospheric cinematic lighting, 8k, photorealistic hyper-detailed --ar 16:9 --v 6.0
```

---

### Сводная таблица параметров генерации:

| Параметр Midjourney | Значение | Назначение |
| :--- | :--- | :--- |
| **Формат баннеров X (Twitter)** | `--ar 16:9` | Оптимальное соотношение сторон для ленты Twitter |
| **Формат аватарки / Logo** | `--ar 1:1` | Квадратное соотношение для профиля и лончпада |
| **Стилистика** | `--style raw` | Предотвращает размытие и чрезмерную мультяшность |
| **Цветовой код NVIDIA** | `#76B900` | Фирменный неоново-зеленый оттенок (NVIDIA Green) |
| **Негативный промпт** | `blurry, cartoon, 2d, low quality, oversaturated rainbow, generic text, stock photo` | Исключение артефактов и некачественной генерации |

---

## 5. Матрица партизанского маркетинга (Targeted Reply Matrix)

Партизанский маркетинг в комментариях под ключевыми инфлюенсерами обеспечивает мгновенный приток целевого трафика без рекламного бюджета. 

### Правила комментирования:
1. Оставлять реплаи в первые 2-5 минут после выхода твита целевого аккаунта.
2. Не спамить одним и тем же текстом: чередовать варианты из матрицы.
3. Обязательно прикреплять CA только в реплаях, где это выглядит контекстно уместно.

---

### Категория 1: Экосистема Robinhood и L2

**Целевые аккаунты:** `@vladtenev`, `@RobinhoodApp`, `@RobinhoodCrypto`, `@ponsfamily`

* **Сценарий 1 (Под твитами Влада Тенева об ончейн-инновациях):**
  ```text
  Robinhood Chain is enabling real stock-backed DeFi primitives. We just launched NVIDIA OmniDreams ($DREAMS) on @PonsFamily v2, distributing real-time tokenized $NVDA yields to holders directly onchain. Peak Robinhood ecosystem utility.
  CA: [INSERT_CA_HERE]
  ```

* **Сценарий 2 (Под анонсами Pons Launchpad):**
  ```text
  $DREAMS is scaling the Pons v2 bonding curve. Fair launch, built-in 99% anti-snipe decay, and 1.8% FeeEscrow routing into tokenized $NVDA rewards. Check the chart on Pons: https://www.ponsfamily.com/launchpad/[INSERT_CA_HERE]
  ```

* **Сценарий 3 (Под общими дискуссиями о ликвидности в сети HOOD):**
  ```text
  The stock dividend meta on Robinhood Chain is live. $DREAMS combines NVIDIA World Model tech narrative with automated $NVDA payouts. Curve filling rapidly. 🚀
  ```

---

### Категория 2: NVIDIA, World Models и AI-исследования

**Целевые аккаунты:** `@NVIDIA`, `@NVIDIAResearch`, `@DrJimFan`, `@NVIDIAAI`

* **Сценарий 1 (Под твитами Джима Фана или NVIDIA Research о генеративных моделях):**
  ```text
  World models and spatial neural simulation are the next frontier. Bringing the OmniDreams architecture onchain to Robinhood Chain ($HOOD), giving decentralized communities access to real-time generative intelligence narrative.
  Research: https://research.nvidia.com/research-area/generative-ai
  CA: [INSERT_CA_HERE]
  ```

* **Сценарий 2 (Под финансовыми отчетами NVIDIA или ростом котировок NVDA):**
  ```text
  Stacking $NVDA onchain while participating in AI World Model protocols. $DREAMS automatically redistributes 1.8% volume fees in tokenized NVIDIA stock on Robinhood Chain via Pons v2.
  ```

---

### Категория 3: Азиатские крипто-киты и GMGN Trenches

**Целевые аккаунты:** `@heyibinance`, `@justinsuntron`, `@0xSunMarket`, `@NipseyCrypto`, `@gmgnai`

* **Сценарий 1 (Англо-китайский реплай под тредами об альфа-токенах):**
  ```text
  Robinhood 链上的英伟达世界模型概念币 $DREAMS 正在 Pons v2 发射！
  
  • 结合英伟达 World Model 空间智能叙事
  • 1.8% 交易税全额分红代币化美股 $NVDA
  • 0 预售，100% 公平发射，毕业自动锁池 Uniswap v4
  
  合约 (CA): [INSERT_CA_HERE]
  https://www.ponsfamily.com/launchpad/[INSERT_CA_HERE]
  ```

* **Сценарий 2 (Для снайперских каналов GMGN):**
  ```text
  Clean dev buy (0.15 ETH), no insider cluster, 1.8% fee escrow with tokenized NVDA dividend pair. $DREAMS is the premier AI play on Robinhood Chain right now.
  ```

---

## 6. Руководство по безопасности, фиксации прибыли и сбору дивидендов (Creator Operations)

### 6.1. Лестничный план Take Profit по стартовому выкупу (0.15 ETH)

Разработчик выкупает начальный объем на **0.15 ETH** (~$390 USD) в блоке 0 (что дает ~5.8% от общего предложения токенов по стартовой цене $3.8K MC).

```
+-----------------------------------------------------------------------------------------------+
|                               ЛЕДОКОЛЬНАЯ СТРАТЕГИЯ ФИКСАЦИИ ПРИБЫЛИ                          |
+-------------------+-----------------+---------------------+------------------+----------------+
| Этап              | Мультипликатор  | Капитализация (MC)  | Доля продажи     | Результат      |
+-------------------+-----------------+---------------------+------------------+----------------+
| **Take Profit 1** | **2.0x**        | **$7,600 USD**      | **30% дев-сумки**| **+0.15 ETH**  |
|                   |                 |                     |                  | (Полный возврат|
|                   |                 |                     |                  | депозита)      |
+-------------------+-----------------+---------------------+------------------+----------------+
| **Take Profit 2** | **4.0x**        | **$15,200 USD**     | **30% дев-сумки**| **+0.35 ETH**  |
|                   |                 |                     |                  | (Чистая прибыль|
|                   |                 |                     |                  | в кошельке)    |
+-------------------+-----------------+---------------------+------------------+----------------+
| **Moonbag Hold**  | **17.9x**       | **$68,000 USD**     | **40% остаток**  | **~$1,800+ USD**|
|                   | (Градация)      | (Uniswap v4)        | (Не продавать на | (Глубокая      |
|                   |                 |                     | кривой!)         | ликвидность)   |
+-------------------+-----------------+---------------------+------------------+----------------+
```

#### Пошаговые действия создателя:
1. Запустите терминальный монитор кривой:
   ```bash
   python scripts/monitor_bonding_curve.py --ca [INSERT_CA_HERE]
   ```
2. При достижении Market Cap **$7,600 USD**:
   - Перейдите на страницу токена на Pons v2.
   - Продайте ровно **30%** от имеющихся у вас токенов $DREAMS.
   - Итог: 0.15 ETH вернулись в кошелек. Ваша позиция полностью безубыточна (Risk-Free).
3. При достижении Market Cap **$15,200 USD**:
   - Продайте еще **30%** от начальной суммы токенов.
   - Итог: Зафиксировано от +0.30 до +0.45 ETH чистой прибыли.
4. Оставшиеся **40% (Moonbag)**:
   - Не продавать на связующей кривой (Bonding Curve).
   - При заполнении кривой на 100% (~$68K MC) протокол автоматически перенесет ликвидность в пул Uniswap v4 и заблокирует ее навсегда в LaunchLocker.

---

### 6.2. Инструкция по клейму комиссий из Pons FeeEscrow

Каждая торговая операция генерирует 1.8% налога, который автоматически аккумулируется в контракте `FeeEscrow`.

```
[Торговый объем на Pons v2] ──(1.8% Tax)──> [Pons FeeEscrow Contract] ──(Клейм)──> [Кошелек Создателя]
```

* **Прогнозируемый доход от налога:**
  - При объеме $30,000 USD: **$540.00 USD** в $NVDA / ETH
  - При объеме $50,000 USD: **$900.00 USD** в $NVDA / ETH
  - При объеме $100,000 USD: **$1,800.00 USD** в $NVDA / ETH

#### Процедура сбора начислений:
1. Откройте панель управления создателя: **`https://ponsfamily.com/creator`**
2. Подключите дев-кошелек в сети Robinhood Chain.
3. В списке запущенных токенов выберите **NVIDIA OmniDreams ($DREAMS)**.
4. В поле **Unclaimed Creator Tax** проверьте накопленный баланс.
5. Нажмите кнопку **Claim Fees** и подтвердите транзакцию в Rabby / MetaMask.
6. Средства поступят на кошелек в виде токенизированных акций $NVDA или ETH.

---

### 6.3. Защита дев-кошелька от дренеров и фишинга

1. **Никогда не подписывайте транзакции `eth_sign` или `Permit` на сторонних ресурсах.** Для работы с Pons v2 используются только стандартные вызовы `create`, `buy`, `sell` и `claimFees`.
2. **Используйте Rabby Wallet:** Rabby автоматически симулирует транзакции и предупреждает о любых подозрительных изменениях балансов или адресов получателя.
3. **Храните сид-фразу на изолированном носителе:** Дев-кошелек с правами на сбор налогов FeeEscrow должен быть защищен от вредоносного ПО.
4. **Не отправляйте токены создателя на непроверенные смарт-контракты или пулы до завершения градации на Uniswap v4.**

---

## 7. Чек-лист готовности к запуску (Launch Readiness Checklist)

Перед нажатием кнопки "Deploy":

- [ ] В кошельке находится минимум 0.20 - 0.25 ETH в сети Robinhood Chain (0.15 ETH на покупку + газ).
- [ ] Оформлен профиль в X: аватарка (`media/logo.png`), баннер (`media/banner.png`), Bio с описанием.
- [ ] Готовы графические ассеты, сгенерированные по промптам из раздела 4.
- [ ] Открыты вкладки: Pons Launchpad (`ponsfamily.com/launchpad/create`), X, Telegram, GMGN.
- [ ] Запущен локальный скрипт мониторинга кривой (`scripts/monitor_bonding_curve.py`).
- [ ] Скопирован текст заглавного боевого твита с подготовленным полем для вставки Contract Address.
