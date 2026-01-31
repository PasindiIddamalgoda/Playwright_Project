const { test, expect } = require('@playwright/test');

const URL = 'https://www.swifttranslator.com/';

const testCases= {

    positive : [

  {
    id: "Pos_Fun_01",
    domain:"Daily language usage", 
    sentence: "Simple sentence",
    input: "mama vathura bonavaa.",
    expected: "මම වතුර බොනවා.",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_02",
    domain:"Word combinations and phrases",
    sentence: "Compound sentences (two ideas joined) ",
    input: "Mata badagini naethi nisaa kanna baehae!.",
    expected: "මට බඩගිනි නැති නිසා කන්න බැහැ!",
    length: 'S',
    shouldPass: true
  },
 
  {
    id: "Pos_Fun_03",
    domain:"Mixed Singlish + English ",
    sentence:"Complex sentences (cause/effect, conditions) ",
    input: "Mata flight eka miss vune ticket eka nathi vuna nisaa.",
    expected: "මට flight එක miss වුනෙ ticket එක නැති වුන නිසා.",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_04",
    domain:"Mixed Singlish + English ",
    sentence: "Interrogative (questions) forms ",
    input: "oyaa breakfast gaththadha?",
    expected: "ඔයා breakfast ගත්තාද?",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_05",
    domain:"Daily language usage",
    sentence: "Imperative (commands) forms ",
    input: "iDHAganna.",
    expected: "ඉඳගන්න.",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_06",
    domain:"Daily language usage",
    sentence: "Positive forms with common verbs",
    input: "Mama havasata sellam karanavaa.",
    expected: "මම හවසට සෙල්ලම් කරනවා.",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_07",
    domain:"Daily language usage",
    sentence: "Negative forms with common verbs",
    input: "Mama adha padaam karanne naehae.",
    expected: "මම අද පාඩම් කරන්නේ නැහැ.",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_08",
    domain:"Greetings and well-wishes",
    sentence: "Simple sentence for birthday wishes",
    input: "Suba upan dhinayak veevaa!",
    expected: "සුබ උපන් දිනයක් වේවා!",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_09",
    domain:"Requests and polite expressions",
    sentence: "Interrogative forms for making requests",
    input: "Mata pen ekak dhenna puluvandha?",
    expected: "මට pen එකක් දෙන්න පුලුවන්ද?",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_10",
    domain:"Responses to common questions",
    sentence: "Simple sentence for agreeing to a request",
    input: "Hari mama dhennam.",
    expected: "හරි මම දෙන්නම්.",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_11",
    domain:"Daily language usage",
    sentence: "Polite phrasing for asking time",
    input: "karunaakara mata veelaava kiyanna puluvandha?",
    expected: "කරුණාකර මට වේලාව කියන්න පුලුවන්ද?",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_12",
    domain:"Informal language ",
    sentence: "Imperative forms in casual contexts ",
    input: "Meheta varen!",
    expected: "මෙහෙට වරෙන්!",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_13",
    domain:"Daily language usage",
    sentence: "Frequently used day-to-day expressions",
    input: "mama gedhara yanavaa",
    expected: "මම ගෙදර යනවා.",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_14",
    domain:"Daily language usage",
    sentence: "Multi-word expressions and frequent collocations",
    input: "dhaen nidhaaganna",
    expected: "දැන් නිදාගන්න",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_15",
    domain:"Slang / informal language ",
    sentence: "Simple sentence with slang terms ",
    input: "Meeka maara case ekakne bQQ",
    expected: "මේක මාර case එකක්නෙ බං",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_16",
    domain:"Formatting and punctuation",
    sentence: "Compound sentence with proper punctuation",
    input: "lankaave api hamoma cricket kiyana kridaavata godak adhareyi. Apee ratee match ekak thiyena davasata yaaluvo okkoma ekathu velaa loku screen ekak issaraha iDHaganne harima udhyogayak ekka. Dhinapu velavata thiyena sathuta vagema, paradhunu velavata thiyena dukath api hamoma ekata bedha gannavaa. Me kridaava nisaa jaathi bedha naethuva haemooma ekama kodiya yata ekathu venavaa. eeka thamaa apee ratee thiyena visheeshathvaya. Cricket kiyanne apita nikanma kridaavak neve, eka apee jivitha vala thiyena loku shakthiyak.",
    expected: "ලන්කාවෙ අපි හමොම cricket කියන ක්‍රිඩාවට ගොඩක් අදරෙයි. අපේ රටේ match එකක් තියෙන ඩවසට යාලුවො ඔක්කොම එකතු වෙලා ලොකු screen එකක් ඉස්සරහ ඉඳගන්නෙ හරිම උද්යොගයක් එක්ක. ධිනපු වෙලවට තියෙන සතුට වගෙම, පරදුනු වෙලවට තියෙන ඩුකත් අපි හමොම එකට බෙද ගන්නවා. මෙ ක්‍රිඩාව නිසා ජාති බෙද නැතුව හැමෝම එකම කොඩිය යට එකතු වෙනවා. ඒක තමා අපේ රටේ තියෙන විශේශත්වය. Cricket කියන්නෙ අපිට නිකන්ම ක්‍රිඩාවක් නෙවෙ, එක අපේ ජිවිත වල තියෙන ලොකු ශක්තියක්.",
    length: 'M',
    shouldPass: true
  },

  {
    id: "Pos_Fun_17",
    domain: "Numbers and abbreviations",
    sentence: "Simple sentence ",
    input: "mama 30min valin 5km avidhdhaa.",
    expected: "මම 30min වලින් 5km අවිද්දා.",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_18",
    domain:"Daily language usage",
    sentence: "Simple sentences with repeated words ",
    input: "kathaa kara kara",
    expected: "කතා කර කර",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_19",
    domain:"Word combinations and phrases",
    sentence: "Future tense sentences ",
    input: "Oyaa meeka bivvoth, lede hodha veyi.",
    expected: "ඔයා මේක බිව්වොත්, ලෙඩෙ හොද වෙයි.",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_20",
    domain:"Phrase patterns and punctuation",
    sentence: "Compound sentence",
    input: "Ayyo! mata hari mahansiyi, namuth vaeda karanna oonee.",
    expected: "අය්යො! මට හරි මහන්සියි, නමුත් වැඩ කරන්න ඕනේ.",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_21",
    domain:"Prhasses patterns",
    sentence: "Past tense sentences ",
    input: "Mama issara godaak poth kiyevvaa.",
    expected: "මම ඉස්සර ගොඩාක් පොත් කියෙව්වා.",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_22",
    domain:"Names / places / common English words",
    sentence: "Plural form ",
    input: "Api Supermarket ekata gihin Ice cream aran, Cinema ekee Movie ekak balanna yamu.",
    expected: "අපි Supermarket එකට ගිහින් Ice cream අරන්, Cinema එකේ Movie එකක් බලන්න යමු.",
    length: 'S',
    shouldPass: true
  },

  {
    id: "Pos_Fun_23",
    domain:"Names / places / common English words",
    sentence: "Compound sentence with cause/effect ",
    input: "University eke Main Auditorium eke Lecture eka thiyena nisaa, mama Canteen ekata gihilla Lunch eka aran, Semester exam ekata Study karanna Library ekata yanavaa; eeth magee Laptop eke Battery eka low nisaa, mata Charging point ekak hoyaganna venavaa.",
    expected:"University eke Main Auditorium eke Lecture එක තියෙන නිසා, මම Canteen එකට ගිහිල්ල Lunch එක අරන්, Semester exam එකට Study කරන්න Library එකට යනවා; ඒත් මගේ Laptop eke Battery එක low නිසා, මට Charging point එකක් හොයගන්න වෙනවා.",
    length: 'M',
    shouldPass: true
  },

  {
    id: "Pos_Fun_24",
    domain:"Mixed Singlish + English ",
    sentence: "Complex sentence with numbers, dates, and abbreviations ",
    input: "'Magee ammata podi Check-up ekakata National Hospital ekata yanna thiyenavaa 2026/05/20 venidhaa. Mama Specialist Doctor kenekva Book kalaa. eyaa enne udhe 8:30 AM ta. Appointment fee eka ekka Total eka LKR 3,500.00 k venavaa. BTW, ammage Full Blood Report ekath aran yanna oonee, naeththam Doctor ta Diagnosis eka dhaenagannana amaruyi. PLS, mata Reminder ekak dhaanna Tue udhee 7:00 AM ta, mokadha mata me dhavasvala vaeda ekka eeka Miss venna puluvan'. 'Oyaa gaava Medical Insurance card eka thiyenavadha?' ' nae!'. 'Tia! Hospital eke Pharmacy eka 24/7 open nisaa Medicine ganna eka Issue ekak vena ekak nae.'",
    expected: "'මගේ අම්මට පොඩි Check-up එකකට National Hospital එකට යන්න තියෙනවා 2026/05/20 වෙනිදා. මම Specialist Doctor කෙනෙක්ව Book කලා. එයා එන්නෙ උදෙ 8:30 AM ට. Appointment fee එක එක්ක Total එක LKR 3,500.00 ක් වෙනවා. BTW, අම්මගෙ Full Blood Report එකත් අරන් යන්න ඕනේ, නැත්තම් Doctor ට Diagnosis එක දැනගන්නන අමරුයි. PLS, මට Reminder එකක් දාන්න Tue උදේ 7:00 AM ට, මොකද මට මෙ දවස්වල වැඩ එක්ක ඒක Miss වෙන්න පුලුවන්'. 'ඔයා ගාව Medical Insurance card එක තියෙනවද?' ' නැ!'. 'Tia! Hospital eke Pharmacy එක 24/7 open නිසා Medicine ගන්න එක Issue එකක් වෙන එකක් නැ.'",
    length: 'M',
    shouldPass: true
  },

    ],

    negative : [

  {
    id: "Neg_Fun_01",
    domain: "Names and Mixed Singlish + English",
    sentence: "Simple sentence ",
    input: "mama Apple Iphone ekak gaththaa.",
    expected: "මම Apple Iphone එකක් ගත්තා.",
    length: 'S',
    
  },
    
  {
    id: "Neg_Fun_02",
    domain:"Names / places / common English words",
    sentence: "Simple sentence ",
    input: "siiyaa Colombo yanna hadhannee.",
    expected: "සීයා Colombo යන්න හදන්නේ.",
    length: 'S',
    
  },

  {
    id: "Neg_Fun_03",
    domain: "Typographical error handling",
    sentence: "Simple sentence ",
    input: "apipassekathakaramu",
    expected: "අපි පස්සේ කතා කරමු",
    length: 'S',
    
  },

  {
    id: "Neg_Fun_04",
    domain:" Slang and informal language",
    sentence: "Simple tense sentences ",
    input: "shaameeeka harima lassanaii.",
    expected: "ශාමේක හරිම ලස්සනයී.",
    length: 'S',
    
  },

  {
    id: "Neg_Fun_05",
    domain:"Names / places ",
    sentence: "Simple sentence",
    input: "no 25, Bandaranayake road, Colombo 07.",
    expected: "නො 25, බණ්ඩාරනායක පාර, Colombo 07.",
    length: 'S',
    
  },

  {
    id: "Neg_Fun_06",
    domain:"Daily language usage",
    sentence: "Simple sentence'",
    input: "MAMA ADA KADEATA YANAWAA",
    expected: "මම අද කඩේ යනවා.",
    length: 'S',
    
  },

  {
    id: "Neg_Fun_07",
    domain:"Slang / informal language",
    sentence: "Interrogative (question) forms ",
    input: "Hallow... kohomadha oyaata???",
    expected: "හෙලෝ කොහොමද ඔයාට???",
    length: 'S',
    
  },

  {
    id: "Neg_Fun_08",
    domain:"Formatting ",
    sentence: "Simple sentence with typographical errors ",
    input: "putuvaissarhataganna",
    expected: "පුටුවඉස්සරහටගන්න",
    length: 'S',
    
  },

  {
    id: "Neg_Fun_09",
    domain:"Word combination with numbers and abbreviations ",
    sentence: "Interrogative forms ",
    input: "Market eken 2.5kg haal & 500ml milk pack 2k geenna puluvandha?",
    expected: "Market එකෙන් 2.5kg හාල් සහ 500ml milk pack 2ක් ගේන්න පුලුවන්ද?",
    length: 'M',
    
  },

  {
    id: "Neg_Fun_10",
    domain:"Formatting",
    sentence: "Interrogative forms with punctuation ",
    input: "Oyaa         koheedha      adha         raeta       yannee?",
    expected: "ඔයා කොහේද අද රැට යන්නේ?",
    length: 'S',
    
  },

    ],

    ui : {
        id: "Pos_UI_01",
        domain:"Slang / informal language ",
        sentence: "Interrogative forms ",
        input: "oyaata kohomadha?",
        partialInput: 'oyata koho',
        expected: "ඔයාට කොහොමද",
        length: 'S'

    }

};

module.exports = { testCases };

test.describe('Singlish to Sinhala Translation Tests', () => {

    // Loop through Positive Tests
    for (const data of testCases.positive) {
        test(`Positive: ${data.id} - ${data.domain}`, async ({ page }) => {
            await page.goto(URL);
            
            // Using placeholder text to find the input box
            const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
            const outputArea = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

            await inputArea.fill(data.input);

            // Wait for translation to process
            await page.waitForTimeout(3000);

            const actualText = await outputArea.textContent();

            // Validation
            expect(actualText.trim()).toBe(data.expected);
        });
    }

    // UI Test
    test(`UI: ${testCases.ui.id} - ${testCases.ui.domain}`, async ({ page }) => {
        await page.goto(URL);
        const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
        const outputArea = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

        // Type partially to test real-time/autocomplete behavior
        await inputArea.type(testCases.ui.partialInput);
        await page.waitForTimeout(3000);

        // Then fill the full input
        await inputArea.clear();
        await inputArea.fill(testCases.ui.input);
        await page.waitForTimeout(3000);

        const actualText = await outputArea.textContent();
        expect(actualText.trim()).toBe(testCases.ui.expected);
    });

    // Loop through Negative Tests
    for (const data of testCases.negative) {
        test(`Negative: ${data.id} - ${data.domain}`, async ({ page }) => {
            await page.goto(URL);
            const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
            const outputArea = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap');

            await inputArea.fill(data.input);
            await page.waitForTimeout(3000);

            const actualText = await outputArea.textContent();

            // Negative tests: output should NOT match the ideal expected value,
            // confirming the translator struggles with these edge cases.
            console.log(`Checking Negative Case ${data.id}: Output was "${actualText}"`);
            expect(actualText.trim()).not.toBe(data.expected); 
        });
    }
});