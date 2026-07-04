---
title: Animating SVG path drawing with the Web Animations API
description: The classic line-drawing effect with stroke-dasharray and stroke-dashoffset — driven by the Web Animations API instead of a library.
date: 2019-06-10
---

<!-- Placeholder body — replace with the original post content from the old Gatsby site. -->

The line-drawing effect is one of those tricks that looks like magic and turns out to be two CSS properties: set `stroke-dasharray` to the path's total length, offset it by the same amount with `stroke-dashoffset`, and animate the offset back to zero.

This post walked through doing that with the Web Animations API rather than a CSS keyframe or an animation library — measuring paths with `getTotalLength()`, building the animation in JavaScript, and chaining several paths into a staggered sequence.

*This is an archived post, kept at its original URL.*
