webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var reviewLeftClicked = function reviewLeftClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  };
};

var reviewRightClicked = function reviewRightClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  };
};

var actions = exports.actions = {
  reviewRightClicked: reviewRightClicked,
  reviewLeftClicked: reviewLeftClicked
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(7);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(12);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(8);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(11);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(9);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(10);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _Event = __webpack_require__(5);

var _Event2 = _interopRequireDefault(_Event);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(6);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Event2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}

// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: 'The Ledbury',
  phone: '(718) - 219 - 8652',
  location: 'Melbourne,Australia'
};

var specialMenuData = [{
  title: 'Super BBQ Grill No Smoke',
  description: 'Fried eggs,Steak,baked potato or french fries, side of vegetables',
  price: 25
}, {
  title: 'Chicken Fingers',
  description: 'Fried eggs,Steak,baked potato or french fries, side of vegetables',
  price: 25
}, {
  title: 'All American Hamburger',
  description: 'Fried eggs,Steak,baked potato or french fries, side of vegetables',
  price: 25
}];

var reviewsData = [{ company: 'The Food Network',
  author: 'Sarah Clamy',
  authorInfo: 'Winner Of The Chef Masters',
  highlight: 'Best Restaurant in the L.A area!',
  review: 'Lorem ipsum dolor amet live-edge iPhone trust fund vinyl authentic. Roof party DIY lo-fi slow-carb. Austin hell of fingerstache celiac VHS. Af semiotics health goth single-origin coffee waistcoat vegan poutine subway tile. Cronut you probably havent heard of them messenger bag quinoa forage, hammock narwhal pour-over try-hard woke marfa wayfarers kickstarter.'
}, { company: 'HBO',
  author: 'Sarah Clamy',
  authorInfo: 'Winner Of The Chef Masters',
  highlight: 'Best Restaurant in the L.A area!',
  review: 'Lorem ipsum dolor amet live-edge iPhone trust fund vinyl authentic. Roof party DIY lo-fi slow-carb. Austin hell of fingerstache celiac VHS. Af semiotics health goth single-origin coffee waistcoat vegan poutine subway tile. Cronut you probably havent heard of them messenger bag quinoa forage, hammock narwhal pour-over try-hard woke marfa wayfarers kickstarter.'
}, { company: 'CWB',
  author: 'Sarah Clamy',
  authorInfo: 'Winner Of The Chef Masters',
  highlight: 'Best Restaurant in the L.A area!',
  review: 'Lorem ipsum dolor amet live-edge iPhone trust fund vinyl authentic. Roof party DIY lo-fi slow-carb. Austin hell of fingerstache celiac VHS. Af semiotics health goth single-origin coffee waistcoat vegan poutine subway tile. Cronut you probably havent heard of them messenger bag quinoa forage, hammock narwhal pour-over try-hard woke marfa wayfarers kickstarter.'
}, { company: 'NBC',
  author: 'Sarah Clamy',
  authorInfo: 'Winner Of The Chef Masters',
  highlight: 'Best Restaurant in the L.A area!',
  review: 'Lorem ipsum dolor amet live-edge iPhone trust fund vinyl authentic. Roof party DIY lo-fi slow-carb. Austin hell of fingerstache celiac VHS. Af semiotics health goth single-origin coffee waistcoat vegan poutine subway tile. Cronut you probably havent heard of them messenger bag quinoa forage, hammock narwhal pour-over try-hard woke marfa wayfarers kickstarter.'
}, { company: 'The New York Times',
  author: 'Sarah Clamy',
  authorInfo: 'Winner Of The Chef Masters',
  highlight: 'Best Restaurant in the L.A area!',
  review: 'Lorem ipsum dolor amet live-edge iPhone trust fund vinyl authentic. Roof party DIY lo-fi slow-carb. Austin hell of fingerstache celiac VHS. Af semiotics health goth single-origin coffee waistcoat vegan poutine subway tile. Cronut you probably havent heard of them messenger bag quinoa forage, hammock narwhal pour-over try-hard woke marfa wayfarers kickstarter.'
}];

var randomQuoteData = [{
  author: 'Paola',
  quote: 'For Me, Cooking Is An Extension Of Love.'
}, {
  author: 'Dayvon',
  quote: 'Give me a pizza or give me death'
}, {
  author: 'Cardi B',
  quote: 'can\'t live without my pizza'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "ContactUs" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Contact Us"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "box" },
        (0, _hyperapp.h)(
          "div",
          { "class": "row" },
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6 center" },
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.location
            ),
            (0, _hyperapp.h)(
              "h6",
              { "class": "Address" },
              "435 main st ",
              (0, _hyperapp.h)("br", null),
              "Hollywood, CA 12402"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "email:"
              ),
              " ",
              (0, _hyperapp.h)(
                "a",
                { href: "mailto:info@LoremIpsum@com" },
                "info@LoremIpsum@com"
              )
            ),
            (0, _hyperapp.h)("hr", null)
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "col-md-6 center" },
            (0, _hyperapp.h)(
              "h6",
              null,
              "Phone:"
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "title" },
              state.companyInfo.phone
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Friday, saturday and sunday ",
              (0, _hyperapp.h)("br", null),
              "from 12pm - 1:30pm"
            ),
            (0, _hyperapp.h)(
              "h6",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)(
              "p",
              null,
              "Daily Booking from 6pm - 9:30pm"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Event;

var _hyperapp = __webpack_require__(0);

function Event(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Event" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Our news"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Promotions & Events"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4 event-boxes" },
          (0, _hyperapp.h)("div", { "class": "img-1" })
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4 event-boxes" },
          (0, _hyperapp.h)(
            "h4",
            null,
            "Beef Sauteed ",
            (0, _hyperapp.h)("br", null),
            "Onions - Let's Enjoy!"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            " 123 Broadway St,NY United States ",
            (0, _hyperapp.h)("br", null),
            "10.00Am - 14.00Pm ",
            (0, _hyperapp.h)("br", null),
            "Monday,Sep, 25th,2018"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4 event-boxes img" },
          (0, _hyperapp.h)("div", { "class": "img-2" })
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4 event-boxes" },
          (0, _hyperapp.h)(
            "h4",
            null,
            "Become A Super Chef So",
            (0, _hyperapp.h)("br", null),
            "Easy With Us"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            " 1600 Allen St,NY United States ",
            (0, _hyperapp.h)("br", null),
            "16.00Pm - 18.00Pm ",
            (0, _hyperapp.h)("br", null),
            "Sunday,Oct, 16th,2018"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4 event-boxes" },
          (0, _hyperapp.h)("div", { "class": "img-3" })
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4 event-boxes" },
          (0, _hyperapp.h)(
            "h4",
            null,
            "Art Photography In",
            (0, _hyperapp.h)("br", null),
            "Foody"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            " 580 Brooklyn St,NY United States ",
            (0, _hyperapp.h)("br", null),
            "08.00Am - 10.30Am ",
            (0, _hyperapp.h)("br", null),
            "Thursday,Nov,19th,2018"
          )
        )
      )
    )
  );
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.facebook.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-facebook-square", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.twitter.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-twitter", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://plus.google.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-google-plus", "aria-hidden": "true" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "https://www.youtube.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fa fa-youtube-play", "aria-hidden": "true" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\xA9 2018 copyright"
      )
    )
  );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        "The Ledbury",
        (0, _hyperapp.h)("hr", null)
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Our Story"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Special Menu"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    )
  );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Lorem ipsum dolor amet try-hard microdosing man bun, wolf listicle migas photo booth hot chicken cray ugh. Pour-over narwhal ramps, truffaut bespoke distillery four dollar bha. Fingerstache vexillologist enamel pin seitan migas pour-over bespoke. Coloring.Pour-over narwhal ramps, truffaut bespoke distillery four dollar bha. Fingerstache vexillologist enamel pin seitan migas pour-over bespoke. Coloring."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"The best steack in the town of Huntington\"-",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Thomas Eggsy"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Reservation"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "RandomQuote" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h1",
        null,
        "\"For me, cooking is an extension of love.\""
      ),
      (0, _hyperapp.h)(
        "span",
        { "class": "author" },
        "- Paola -"
      )
    )
  );
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "REVIEWS"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        state.reviewsData[state.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        "\"",
        state.reviewsData[state.reviewStatus.currentReview].highlight,
        "\""
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.reviewsData[state.reviewStatus.currentReview].review
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.reviewsData[state.reviewStatus.currentReview].author
        ),
        " - ",
        (0, _hyperapp.h)(
          "em",
          null,
          state.reviewsData[state.reviewStatus.currentReview].authorInfo
        )
      )
    );
  };
  var LeftClickBTN = function LeftClickBTN() {
    if (state.reviewStatus.currentReview == 0) {} else {
      actions.reviewLeftClicked();
    }
  };

  var rightClickBTN = function rightClickBTN() {
    if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {} else {
      actions.reviewRightClicked();
    }
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("img", { src: "https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526670303qwiib.png" })
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { onclick: LeftClickBTN, "class": "fa fa-arrow-left " + (state.reviewStatus.currentReview > 0 ? 'ready' : ''), "aria-hidden": "true" }),
            (0, _hyperapp.h)("i", { onclick: rightClickBTN, "class": "fa fa-arrow-right " + (state.reviewStatus.currentReview == state.reviewsData.length - 1 ? '' : 'ready'), "aria-hidden": "true" })
          )
        )
      )
    )
  );
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var loopMenu = function loopMenu() {
    return state.specialMenuData.map(function (item) {
      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box-img" },
            (0, _hyperapp.h)(
              "div",
              { "class": "price-circle" },
              "$",
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { "class": "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "details" },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Delicious Flavor of Autumn"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        "View Full Menu"
      )
    )
  );
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            "Book Table Directly "
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "(718) - 219 - 8652 "
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours" },
            "Openig Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Mon -Fri: "
            ),
            " 9am - 9pm",
            (0, _hyperapp.h)(
              "strong",
              null,
              "Weekend:"
            ),
            " 9am -11pm"
          )
        )
      )
    )
  );
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {}
  }
});

/***/ })
],[13]);