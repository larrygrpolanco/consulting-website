---
title: 'What Do LLMs Actually Know?'
date: '2025-12-28'
description: "LLMs have strong built-in preferences for certain answers. Making them more random does not make them more creative or accurate. It just makes them less reliable."
author: 'Larry Grullon-Polanco'
tags: ['LLM', 'Classification', 'Research', 'Genre Analysis', 'Applied Linguistics']
---

Here's a question I keep coming back to: when an LLM labels a sentence correctly, what does that actually mean? Did it *know* the right answer? Or did it just happen to land on it?

The distinction matters more than it sounds.

## How LLMs Actually Make Decisions

When a language model reads a sentence and picks a label, it's not looking the answer up in some internal database of facts. It's sampling from a probability distribution: a ranked list of possible next tokens, each with an assigned weight based on the training data. The model doesn't produce *the* answer. It produces *an* answer, drawn from a distribution that reflects everything it learned during training.

There's a parameter called **temperature** that controls how that sampling works. At temperature 0, the model always picks the highest-probability token. Pure determinism. At higher temperatures, it samples more broadly, giving lower-probability options a real chance of being selected.

The popular intuition is that lower temperature means more conservative and boring, higher temperature means more creative and unpredictable. That's roughly right for creative writing. For classification tasks, where there's a correct answer, it breaks down completely.

## What 450,000 Annotations Showed

I ran GPT-4.1-mini on 40 research article introductions, 50 times each, across 9 temperature settings from 0.0 to 2.0. The task was rhetorical move-step annotation using the Create-a-Research-Space (CaRS) framework, a well-established system for labeling the strategic moves writers make in academic introductions.

That generated over **450,000 sentence annotations**.

Here's what I found: accuracy was essentially flat across all nine temperature settings. The model's F1 scores against expert annotations barely moved whether I ran it cold or hot. So raising temperature didn't help.

But consistency was not flat at all.

At T = 0.0, the model's agreement with itself across 50 repeated runs was 0.948. Excellent reliability. At T = 2.0, it had dropped to 0.853, and some specific categories had fallen much further. "Topic generalizations," the kind of background statement that doesn't have a clear linguistic signal, dropped nearly 0.4 points. And at T = 2.0, more than half of all outputs failed structurally. The model stopped producing parsable labels entirely.

Same accuracy. Totally different reliability.

## What That Means

The model didn't "know" the answer in any stable sense. It had a strong preference for certain answers, and at low temperature it almost always acted on those preferences. At high temperature it still had those preferences, but random noise could override them. You weren't getting more creativity. You were just getting more noise.

The practical upshot: for any annotation task, use T = 0.2 or below, run the model multiple times on a small subset of your data before scaling up, and report your inter-iteration reliability. The same standards we apply to human coders should apply here.

The more interesting thing I noticed: the model's inconsistency wasn't random. It concentrated in the rhetorically ambiguous categories, the sentences that skilled human annotators also disagree about. Where the model wavered is where the task is genuinely hard. That's not a flaw to be engineered away. That's a signal about where more theoretical work is needed.

The full replication package, code, data, all 450,000+ annotations, is on [GitHub](https://github.com/larrygrpolanco/llm-temperature-consistency).
