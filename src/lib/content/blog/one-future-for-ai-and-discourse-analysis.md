---
title: 'One Future for AI and Discourse Analysis'
date: '2026-01-15'
description: "AI is not going to make discourse analysis easier. It is going to make it different. That distinction is worth thinking through."
author: 'Larry Grullon-Polanco'
tags: ['AI', 'Discourse Analysis', 'Applied Linguistics', 'Research Methods']
published: true
---

I keep hearing two versions of the same claim. The first: AI is going to automate discourse analysis away, and applied linguists are going to have to find something else to do. The second: AI is a tool like any other, discourse analysis requires human interpretation, nothing fundamental is changing.

I don't think either of those is right.

Here's what I'm actually noticing: the work isn't going away, and it isn't staying the same. It's shifting. The bottleneck used to be annotation, reading hundreds or thousands of sentences and labeling each one according to a framework. That part can now be done overnight by a model. What's moving into the bottleneck is everything that surrounds annotation: designing the framework, writing the prompt, validating the output, deciding what "good enough" means, auditing the system when it behaves strangely.

That's not less work. In some ways it's harder work.

## The Labor Moves, Not Away

When you did annotation yourself, you were the quality control. Your own sense of the data, built up over hours of close reading, was the check on your results. You caught inconsistencies because you were there for all of them.

When a model does the annotation, you're no longer close-reading 800 sentences. You're designing the experiment that tells the model how to read those sentences, and then designing the test that tells you whether it's doing it right. The expertise doesn't go away. It gets redirected.

This is actually demanding. Writing a good annotation prompt requires you to have thought through your framework more carefully than you might when you're just coding with your own judgment. What counts as Move 2? Under what conditions does a sentence that looks like background actually function as gap identification? The model will expose every ambiguity in your framework, because it has no implicit understanding to fall back on. It only has what you tell it.

## What This Requires

The researcher's role doesn't end at annotation anymore. It extends to designing the system, validating the system, and knowing when to trust or distrust the system's outputs.

That last part is underrated. I ran 450,000 annotations across 50 repeated runs to study consistency, and what I found is that the model's uncertainty concentrated in the same places human annotators disagree. The ambiguous cases were ambiguous for everyone. A researcher using an LLM pipeline and never looking at the distribution of disagreements is flying blind, not because the model is unreliable in some general sense, but because the model's uncertainty is meaningful and worth reading.

I'm not sure what to call this kind of expertise yet. It's not traditional discourse analysis and it's not machine learning engineering. It sits somewhere between them, and I think it's the space applied linguists are going to be working in for a while.

I don't have the full picture of where this goes. But the field is going to need researchers who are comfortable both in the theory and in the system, people who can ask the linguistic question and build the pipeline that answers it. That's a different training than most programs currently offer, and it's probably worth talking about.
