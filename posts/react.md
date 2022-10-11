---
title: "هل تستحق React كل هذا الزخم ؟"
date: "2022-10-09"
---

## اذا كنت تستخدم ال facebook او احدى تطبيقاتها أو ربما شاهدت مسلسلك المفضل على Netflix او متابعة سلسلتك التعليمية في منصة khan academy او Courser , Udacity او قمت بترتيب مهامك و تقسيم اعمالك في Terllo فانت بالتاكيد استخدمت تطبيق مبني بال React .

في هذه المقالة سنتحدث عنها بنظرة عامة **تاريخها ، مميزاتها و عيوبها و المشاكل التي حلتها هذه المكتبة**.

```
console.log("HI");
```

# **ماهي ال React ؟ :thinking:**

_هي مكتبة مفتوحة المصدر خاصة بتطوير الواجهات تساعد المطورين على بناء واجهات المواقع أو التطبيقات عن طريق بناء عناصر صغيرة جدا تسمى بالـ Component بحيث انه يمكن دمجها و إعادة استخدامها_

# **نظرة عـن تـاريخ الـ React : :books:**

في عام ٢٠١١ عمل فريق الاعلانات في الفيس بوك على إعادة بناء المشروع - Facebook Ads - وفي آخر العام تم الانتهاء من المشروع ولكن لم يكن بالصورة المرضية لانهم وقعو في مشكلة ال two-data binding.

يبدو أنها كانت الأكثر روجاً وتتبناها إطارات العمل المشهورة في تلك الفترة مثل ال AngularJS و Knockoutjs مشكلة هذي الطريقة تزيد تعقيد كلما زاد حجم المشروع غير انها تقوم بتعديل البيانات في طرفين - model & view - من **هنا بدأ التساؤل لماذا لا توجد طريقة لتحديث بيانات العنصر بشكل مباشر ؟؟**

> بالمناسبة في نفس العام قام بعض المطورين بإنشاء مستودع في ال Github تحت اسم TodoMVC الهدف منه تجربة اشهر مكتبات وإطارات العمل في الجافا سكربت بعد ذلك ظهر مشروع ال HNPWA وهو اختصار Hacker News Readers as PWAs
>
> **ليس الهدف منه ايهم أفضل بل يعطي نظر عن الاختلافات و كذلك يختبر الاداء عن طريق مفهوم ال PWA**
>
> [HNPWA](https://hnpwa.com/) [TodoMVC](http://todomvc.com/)

## بالعودة الى ال React عـمل Jordan Walke مبتكر الـ React و عضو في فريق التطوير

على تطوير أداء تقوم برسم عناصر الصفحة من جديد عند كل عملية تغيير للبيانات و أطلق عليها اسم [FaxJS](https://github.com/jordwalke/FaxJs) وتم تغير الاسم الى React لاحقاً .

بهذا العمل أثبت Walke أنه توجد طريقة لحل هذه المشكلة ، وفي بداية ٢٠١٢ قام Walke وبمساعدة من زملائه على هذا الاداء و طرحها رسميا في الفيس بوك .

**لكن لم تلقى اي اهتمام ، لانه كانت تحتاج إلى موقع توثيق عن طريقة عملها ..**

في ابريل من نفس العام ، استحوذت فيسبوك على انستقرام ، وهذا اعطى ال React فرصة قووية لان فريق التطوير لـ instagram تبناها و بدا العمل عليها ، و تم إعادة بناء Instagram من الصفر باستخدام ال React مما اداء الى تطويرها وحل مشكلات فعلية فيها .

**وبالعودة إلى فريق الاعلانات في آخر العام تم بناء كامل المنصة بـ الـ React**

وفي اوائل ٢٠١٣ وبالتحديد في أبريل تم الاعلان عنها رسميا في مؤتمر JSconf US على **انها مكتبة مفتوحة المصدر** ، ولكن ردة فعل المطورين كانت **عكسية تماما على كيفية العمل على ملف واحد مدمج بداخله HTML & JS** و هذا سبب نوع من الاحباط لفريق ال React ، وفي آخر العام تم إعطاء الفيس بوك فرصة أخرى لتحدث عنها و استغل فريق تطوير ال Instagram هذي الفرصة و ركزو على التكتيكات و المشاكل التي تم حلها بي ال React وتولى هذه المهمة Peter Hunt

[مشاهدة الفيديو](https://www.youtube.com/watch?v=x7cQ3mrcKaY&t=57s)

في أكتوبر عام ٢٠١٤ أعلن مطورين قوقل عن تحديث جديد - جذري - قادم ل AngularJS و هذا اعطى دافع قووي للمطورين لتجربة ال React.. مصائب قوم عند قوماً فوائد :smiling_face:

# **فكرة عمل الـ React : :man_factory_worker: :man_mechanic:**

قبل شرح طريقة عمل الـ React نحتاج الى فهم فكرة عرض الصفحة في المتصفح .عند زيارة صفحة ويب يقوم السيرفر بإرجاع HTML الى المتصفح و لنفرض أنها على هذا الشكل :
![html-to-dom|690x407, 75%](../images/html-to-dom.png)
**المتصفح يقرأ صفحة الـ HTML ويبدأ ببناء عناصر الصفحة - DOM**

# ما هـو الـ DOM ؟

الـ DOM هـو اختصار لعبارة Document Object Model يقوم بتمثيل عناصر صفحة الـ HTML بحيث انه **يكون الجسر الرابط بين الكود و طريقة عرضه في الصفحة**

وكذلك يتيح امكانية التعامل معها **برمجيياً بإستخدام الجافا سكربت** مثل إنشاء حدث او اضافة عنصر او تعديله و أيضا حذفه . و كذلك يسمح لك بتخصيص الصفحة بإستخدام الـ CSS .
![dom-to-ui|690x407, 75%](../images/dom-to-ui.png)

## لنأخذ مثال على طريقة إضافة عنصر الى الصفحة باستخدام الجافا سكربت :man_technologist:

```html
<html>
  <body>
    <div id="app"></div>

    <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById("app");

      // Create a new H1 element
      const header = document.createElement("h1");

      // Create a new text node for the H1 element
      const headerContent = document.createTextNode(
        "Develop. Preview. Ship. 🚀"
      );

      // Append the text to the H1 element
      header.appendChild(headerContent);

      // Place the H1 element inside the div
      app.appendChild(header);
    </script>
  </body>
</html>
```

يعمل الكود على التالي ، يقوم بإنشاء عنصر HTML - غير موجود مسبقاً - عن طريق الجافا سكربت ثم بعد ذلك يقوم بإضافته الى صفحة الـعرض صـفحـة الـ HTML .

> عند تطبيق المثال أعلاه و عرض الصفحة في المتصفح ، ستجد إنه تم عرض العناصر الذي تم إنشاؤه عن طريق الجافا سكربت بينما لم يكن موجود في الملف المصدري - source code :thinking:

**مرة أخرى طريقة اضافة العنصر تمت عن طريق الجافا سكربت من خلال :**

```js
<script type="text/javascript">
  const app = document.getElementById('app'); const header =
  document.createElement('h1'); const headerContent =
  document.createTextNode('Develop. Preview. Ship. 🚀');
  header.appendChild(headerContent); app.appendChild(header);
</script>
```

**تحديث العناصر بإستخدام الجافاسكربت طريقة فعالة جدا** ولكنها مطولة لأننا نكتب كامل التفاصيل في الكود و تزيد الصعوبة كلما توسع العمل .

# هل توجد طريقة أفضل لتحديث محتوى العناصر من غير كتابة هذه التفاصيل ؟!

هذا السؤال يقودنا الى مفهوم الـ **Imperative Programming** و **Declarative Programming**

في المثال السابق اتبعنا طريقة الـ [Imperative](https://beta.reactjs.org/learn/reacting-to-input-with-state#how-declarative-ui-compares-to-imperative) لأننا قمنا بكتابة كامل الخطوات لاضافة و تحديث محتوى العنصر بينما طريقة الـ Declarative لا نهتم بالتفاصيل و طريقة الاضافة و تحديث محتوى عنصر إنما نريد النتيجة النهائية من العملية .

الـ React تتبع مفهوم الـ [Declarative](https://beta.reactjs.org/learn/reacting-to-input-with-state#how-declarative-ui-compares-to-imperative) لأننا نخبرها ماذا نريد في الواجهة وهي تتولى العملية -كيف و متى - تتم العملية سواء كانت إضافة عنصر و تعديله و حذفه .

**لفهم الصور بشكل أفضل لـنعيد تطبيق نفس المثال و لكن هذي المرة بإستخدام مكتبة الـ React :**

```js
<script type="text/jsx">
  const app = document.getElementById("app") ReactDOM.render(
  <h1>Develop. Preview. Ship. 🚀</h1>, app)
</script>
```

لاحظ أنها تم اختصار كامل الكود السابق في سطرين فقط - **في السطر الثاني بالتحديد قمنا بإنشاء عنصر جديد ثم اعطاه قيمة و أخيرا اضافته الى الصفحة وهذه العملية كاملة تمت من غير استخدام دوال الـ document .**

# نـعود الى فكرة عمل الـ React :arrow_backward: تعتمد الـ React الى ثلاث عناصر أساسية وهـي :

1.  **Components**
2.  **Props**
3.  **State**

--

الـ Components عبارة عن كتابت عنصر DOM مثل header,nav,input,button, heading tags … etc بإستخدام الجافاسكربت عن طريق [JSX](https://beta.reactjs.org/learn/writing-markup-with-jsx#) . بهذه الطريقة نستطيع تقسيم عناصر الموقع الى أجزاء صغيرة جدا components يمكن تخصيصها ، تعديلها و حذفها من غير أن تتأثر باقي العناصر و الجميل إنه يمكن إعادة استخدامها وتخصيصها .

\***\*مفهوم الـ [JSX](https://beta.reactjs.org/learn/writing-markup-with-jsx#) هـو كتابة عناصر صفحة HTML بإستخدام الجافا سكربت . قوتها أنك لا تحتاج الى اي معلومات اضافية انما هي عناصر HTML المعروفة و ثانيا يمكن دمج عمليات الجافاسكربت معها\*\***

```js
function Header() {
  return <h1>My name's Abdulrahman </h1>;
}

function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
    </div>
  );
}
```

## أما مفهوم الـ Props

هـو عبارة عن **تمرير بيانات** الى الـ Components مثل تمرير نص او رابط أو عناصر تخصيص CSS مثل عرض او طول المحتوى أو كلاس معين ، و أيضا يمكن تمرير دوال . **لـكن يجب مراعاة ان البيانات المررة غير قابلة للتغير**

```

function Header({name} ) {
  return <h1>My name's{name} </h1>;
}

function HomePage() {
  return (
    <div>
      {/* Nesting the Header component */}
      <Header  name="abdulrahman" />
    </div>
  );
}

```

## المفهوم الأخير التي تعتمد عليه هذه المكتبة الجميلة و هـو الـ State :superhero:

وهي **تعتمد على تفاعل المستخدم و تغير المحتوى للـ Component** بمعنى عندما **يتم الضغط على زر إضافة للسلة في مواقع التسوق فيتم تحديث محتوى السلة أو عند الضغط على زر إعجاب في موقع ما فـتتغير حالة المحتوى لـ Component**

> الـ React تعتمد على مبدأ one way data-flow أي ان البيانات تسير في اتجاه واحد من الأعلى الى الأسفل ، ويتم تحديث بيانات عنصر معين عن طريق الـ virtual dom من خلال خوارزمية الـ [Reconciliation](https://reactjs.org/docs/reconciliation.html)

## مشاكل حلتها الـ React :hammer_and_wrench:

1.  التخلي عن مفهوم الـ two data binding و استخدام الـ one way data binding .
2.  تقسيم اصعب الواجهات إلى أجزاء صغيرة جدا مثل قطع لعبة الليقو - LEGO - تستطيع بناء شكل كبير بقطع صغيرة جدا .

## مميزات ال React :+1: :ok_hand:

- اولا السهولة ، تعتمد هذي المكتبة بشكل كامل على الجافا سكربت ، و عند التعامل معها فأنت تتعامل مع اكواد جافا سكربت يعني ما تحتاج تتعلم طريقة كتابة جديدة أو مفاهيم جديدة .

- مفهوم ال Reusable او اعادة استخدام العناصر وكذلك ال Component Composition دمج اكثر من عنصر في عنصر واحد
- وكذلك يمكن استخدامها مع مكتبات و إطارات عمل أخرى مثل JQuery, AngularJS and backbone ...etc
- تستطيع بناء تطبيقات جوال لانظمة ال Android & IOS و كذلك صفحات الويب و ايضا تطبيقات VR

## عيوبها :-1: :unamused:

- تعتبر مكتبة و بداية تعلمها سهل جدا و ما يعيبها **هو منحنى التعلم اي بمعنى كل ما تعمقت فيها تزداد صعوبة .**

- ضعف المرجع - documentation - تحتاج الى مواقع اخرى لفهم موضوع معين .
- JSX نعلم انها من اقوى مميزات ال React ولكن تسبب بعض الارتباك لمن يدخل عالم ال React لانه مفهوم جديد بإن تكتب اكواد Html بداخل javascript وتحتاج لبعض الوقت لاستيعاب المفهوم و فهم طريقة عمله.
- ويرى البعض مشكلتها انها مسؤولة عن جزيئة الـ View تحتاج الى بناء Model & control لبناء مشروع كامل .
- وكذلك مشكلة ال SEO في حال استخدمتها كـ CSR - Client Side Rendering

## **في الأخير لا توجد مكتبة او اطار عمل كاملة وخالية من المشاكل فلكل شي مميزات و عيوب .وكذلك أنت عزيزي المطور و عزيزتي المطورة لا تتعصب لأطار عمل أو مكتبة معينة فجميعها أدوات نستخدمها و ليس العكس :heavy_heart_exclamation:**

## المصادر :

[What is and why React](https://learning.oreilly.com/library/view/what-react-is/9781491996744/)

[Learning React : 2nd edition](https://www.oreilly.com/library/view/learning-react-2nd/9781492051718/)

[React in Action](https://www.manning.com/books/react-in-action)

[ReactKung](https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)

[codecademy](https://www.codecademy.com/articles/react-virtual-dom)

[wikpedia](<https://en.wikipedia.org/wiki/React_(web_framework)#History>)

[Next JS](https://nextjs.org/learn/foundations/about-nextjs)
