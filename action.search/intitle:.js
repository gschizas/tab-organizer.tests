"use strict";
/*global equals, expect, module, ok, same, start, stop, test */
/*global action, array */

var result;

test("intitle:", function () {
    expect(5);

    same(action.search(array, "intitle:"), []);

    result = [
        { tab: {
            title: "Gmail - Inbox (3) - pcxunlimited@gmail.com",
            url: "https://mail.google.com/mail/?shva=1#inbox"
        }},
        { tab: {
            title: "Issue 1316 - chromium - Scroll Wheel to switch tabs? - Project Hosting on Google Code",
            url: "http://code.google.com/p/chromium/issues/detail?id=1316"
        }},
        { tab: {
            title: "YouTube - Google Chrome Extensions: Extension API Design",
            url: "http://www.youtube.com/watch?v=bmxr75CV36A"
        }},
        { tab: {
            title: "Video - MDC",
            url: "https://developer.mozilla.org/En/HTML/Element/Video"
        }},
        { tab: {
            title: "-moz-box-align - MDC",
            url: "https://developer.mozilla.org/en/CSS/-moz-box-align"
        }},
        { tab: {
            title: "x86-64 - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/X86-64"
        }},
        { tab: {
            title: "Vegetarianism - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/Vegetarian#Nutrition"
        }},
        { tab: {
            title: "x86-64 - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/Vegetarian"
        }},
        { tab: {
            title: "Vegetarianism - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/X86-64/"
        }},
        { tab: {
            title: "3DDriverIssues - The Official Wine Wiki",
            url: "http://wiki.winehq.org/3DDriverIssues"
        }},
        { tab: {
            title: "256ColorMode - The Official Wine Wiki",
            url: "http://wiki.winehq.org/256ColorMode"
        }},
        { tab: {
            title: "The VideoLAN Forums • View topic - Save playlist using relative path",
            url: "http://forum.videolan.org/viewtopic.php?f=7&t=4658"
        }}
    ];
    same(action.search(array, "intitle:-"), result);

    result = [
        { tab: {
            title: "-moz-box-align - MDC",
            url: "https://developer.mozilla.org/en/CSS/-moz-box-align"
        }},
        { tab: {
            title: "x86-64 - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/X86-64"
        }},
        { tab: {
            title: "x86-64 - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/Vegetarian"
        }},
    ];
    same(action.search(array, 'intitle:"-"'), result);

    same(action.search(array, "intitle:#"), []);

    result = [
        { tab: {
            title: "Issue 1316 - chromium - Scroll Wheel to switch tabs? - Project Hosting on Google Code",
            url: "http://code.google.com/p/chromium/issues/detail?id=1316"
        }},
        { tab: {
            title: "Let me google that for you",
            url: "http://lmgtfy.com/"
        }},
        { tab: {
            title: "YouTube - Google Chrome Extensions: Extension API Design",
            url: "http://www.youtube.com/watch?v=bmxr75CV36A"
        }}
    ];
    same(action.search(array, "intitle:gOoGlE"), result);
});


test("intitle: (escaping)", function () {
    expect(2);

    result = [
        { tab: {
            title: "Arch Linux Forums / How to edit video files (mp4, avi ...) meta data (Title, author ...) ?",
            url: "http://bbs.archlinux.org/viewtopic.php?id=43048"
        }}
    ];
    same(action.search(array, "intitle:(mp4"), result);

    result = [
        { tab: {
            title: "Issue 1316 - chromium - Scroll Wheel to switch tabs? - Project Hosting on Google Code",
            url: "http://code.google.com/p/chromium/issues/detail?id=1316"
        }},
        { tab: {
            title: "Arch Linux Forums / How to edit video files (mp4, avi ...) meta data (Title, author ...) ?",
            url: "http://bbs.archlinux.org/viewtopic.php?id=43048"
        }}
    ];
    same(action.search(array, "intitle:?"), result);
});


test("intitle: (AND)", function () {
    expect(2);

    result = [
        { tab: {
            title: "Gmail - Inbox (3) - pcxunlimited@gmail.com",
            url: "https://mail.google.com/mail/?shva=1#inbox"
        }},
        { tab: {
            title: "I HEART VIDEO",
            url: "http://iheartvideo.appspot.com/"
        }},
        { tab: {
            title: "Video - MDC",
            url: "https://developer.mozilla.org/En/HTML/Element/Video"
        }},
        { tab: {
            title: "-moz-box-align - MDC",
            url: "https://developer.mozilla.org/en/CSS/-moz-box-align"
        }},
        { tab: {
            title: "3DDriverIssues - The Official Wine Wiki",
            url: "http://wiki.winehq.org/3DDriverIssues"
        }},
        { tab: {
            title: "256ColorMode - The Official Wine Wiki",
            url: "http://wiki.winehq.org/256ColorMode"
        }}
    ];
    same(action.search(array, "-intitle:google -intitle:fORuM -intitle:wIkipeDia"), result);

    result = [
        { tab: {
            title: "I HEART VIDEO",
            url: "http://iheartvideo.appspot.com/"
        }},
        { tab: {
            title: "Video - MDC",
            url: "https://developer.mozilla.org/En/HTML/Element/Video"
        }}
    ];
    same(action.search(array, "-intitle:GoogLe -intitle:ForU -intitle:wikipedia intitle:vIdeo"), result);
});


test("intitle: (-)", function () {
    expect(2);

    result = [
        { tab: {
            title: "Let me google that for you",
            url: "http://lmgtfy.com/"
        }},
        { tab: {
            title: "I HEART VIDEO",
            url: "http://iheartvideo.appspot.com/"
        }},
        { tab: {
            title: "Arch Linux Forums / How to edit video files (mp4, avi ...) meta data (Title, author ...) ?",
            url: "http://bbs.archlinux.org/viewtopic.php?id=43048"
        }}
    ];
    same(action.search(array, "-intitle:-"), result);

    result = [
        { tab: {
            title: "Gmail - Inbox (3) - pcxunlimited@gmail.com",
            url: "https://mail.google.com/mail/?shva=1#inbox"
        }},
        { tab: {
            title: "Let me google that for you",
            url: "http://lmgtfy.com/"
        }},
        { tab: {
            title: "I HEART VIDEO",
            url: "http://iheartvideo.appspot.com/"
        }},
        { tab: {
            title: "YouTube - Google Chrome Extensions: Extension API Design",
            url: "http://www.youtube.com/watch?v=bmxr75CV36A"
        }},
        { tab: {
            title: "Video - MDC",
            url: "https://developer.mozilla.org/En/HTML/Element/Video"
        }},
        { tab: {
            title: "-moz-box-align - MDC",
            url: "https://developer.mozilla.org/en/CSS/-moz-box-align"
        }},
        { tab: {
            title: "x86-64 - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/X86-64"
        }},
        { tab: {
            title: "Vegetarianism - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/Vegetarian#Nutrition"
        }},
        { tab: {
            title: "x86-64 - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/Vegetarian"
        }},
        { tab: {
            title: "Vegetarianism - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/X86-64/"
        }},
        { tab: {
            title: "3DDriverIssues - The Official Wine Wiki",
            url: "http://wiki.winehq.org/3DDriverIssues"
        }},
        { tab: {
            title: "256ColorMode - The Official Wine Wiki",
            url: "http://wiki.winehq.org/256ColorMode"
        }},
        { tab: {
            title: "The VideoLAN Forums • View topic - Save playlist using relative path",
            url: "http://forum.videolan.org/viewtopic.php?f=7&t=4658"
        }}
    ];
    same(action.search(array, "-intitle:?"), result);
});


test("intitle: (quotes)", function () {
    expect(1);

    result = [
        { tab: {
            title: "Gmail - Inbox (3) - pcxunlimited@gmail.com",
            url: "https://mail.google.com/mail/?shva=1#inbox"
        }},
        { tab: {
            title: "Issue 1316 - chromium - Scroll Wheel to switch tabs? - Project Hosting on Google Code",
            url: "http://code.google.com/p/chromium/issues/detail?id=1316"
        }},
        { tab: {
            title: "YouTube - Google Chrome Extensions: Extension API Design",
            url: "http://www.youtube.com/watch?v=bmxr75CV36A"
        }},
        { tab: {
            title: "Video - MDC",
            url: "https://developer.mozilla.org/En/HTML/Element/Video"
        }},
        { tab: {
            title: "-moz-box-align - MDC",
            url: "https://developer.mozilla.org/en/CSS/-moz-box-align"
        }},
        { tab: {
            title: "x86-64 - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/X86-64"
        }},
        { tab: {
            title: "Vegetarianism - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/Vegetarian#Nutrition"
        }},
        { tab: {
            title: "x86-64 - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/Vegetarian"
        }},
        { tab: {
            title: "Vegetarianism - Wikipedia, the free encyclopedia",
            url: "http://en.wikipedia.org/wiki/X86-64/"
        }},
        { tab: {
            title: "3DDriverIssues - The Official Wine Wiki",
            url: "http://wiki.winehq.org/3DDriverIssues"
        }},
        { tab: {
            title: "256ColorMode - The Official Wine Wiki",
            url: "http://wiki.winehq.org/256ColorMode"
        }},
        { tab: {
            title: "The VideoLAN Forums • View topic - Save playlist using relative path",
            url: "http://forum.videolan.org/viewtopic.php?f=7&t=4658"
        }}
    ];
    same(action.search(array, 'intitle:" - "'), result);
});
