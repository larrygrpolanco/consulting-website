---
title: 'One Accurate Run Is Not Enough: What 450,000 Annotations Taught Us About LLM Reliability'
date: '2025-12-28'
description: 'LLMs can do genre analysis. But accuracy and consistency are not the same thing — and that distinction changes everything for applied linguistics research.'
author: 'Larry Grullon-Polanco'
tags: ['LLM', 'Classification', 'Research', 'Genre Analysis', 'Applied Linguistics']
---

Something that used to require months of expert annotation can now be done overnight. Large language models can read research article introductions and label the rhetorical moves in them — the strategic moves writers make to establish territory, identify gaps, and announce their contributions. Accurately. At scale.

That's genuinely exciting. But before applied linguists hand over their corpora to these tools, there's a question that almost nobody has asked: **does the model give the same answer twice?**

That question is what our study — now in press at *Research Methods in Applied Linguistics* — set out to answer systematically.

## The Problem Nobody Was Measuring

Most LLM studies in applied linguistics report results from a single run. Run the model once, compare its labels to expert annotations, report the F1 score. Done.

But LLMs are probabilistic. They do not produce the same output twice by default. A parameter called **sampling temperature** controls how the model selects tokens from probability distributions. At higher temperatures, the model is more likely to pick lower-probability words — and therefore labels. Every time you run the model, it's making a slightly different set of choices.

For a researcher using LLMs to annotate a corpus, this is not a minor technical detail. If you annotate 500 sentences on Monday and then re-run the same prompt on Tuesday, you may get different labels. If you run it five times on the same article, you may get five different results. That variability is invisible unless you go looking for it.

We went looking.

## What We Did

We ran GPT-4.1-mini on 40 research article introductions, 50 times each, across 9 different temperature settings — from T = 0.0 to T = 2.0. The task: annotate each sentence using the Create-a-Research-Space (CaRS) framework, a well-established rhetorical move-step system with 3 moves and 11 steps.

That generated over **450,000 sentence annotations** and 18,000 individual runs.

For each temperature, we asked three questions:
1. Did the model produce usable output at all?
2. Did it produce *the same* output across runs?
3. Did it produce *correct* output compared to expert annotations?

## The Central Finding: Accuracy and Consistency Are Not the Same Thing

This is the result that surprised us most.

Classification performance was **essentially flat across all nine temperature settings**. Move-level F1 scores held steady at around 0.86. Step-level scores stayed near 0.46. The model was equally "accurate" — in the sense of aligning with expert annotations — whether we ran it at T = 0.0 or T = 2.0.

Consistency, however, was not flat at all.

At T = 0.0, Krippendorff's α across repeated runs was **0.948** — excellent reliability. At T = 2.0, it had dropped to **0.853** — still acceptable at the move level, but with step-level categories degrading far more steeply. Step 1b (topic generalizations) fell 0.391 points. And at T = 2.0, over **50% of all outputs failed structurally** — the model stopped producing parsable labels entirely.

Higher temperatures made the model louder but not smarter. They introduced noise without improving its answers.

## What This Means in Practice

Imagine you run a zero-shot annotation study, report an F1 of 0.86, and conclude that LLMs are viable tools for rhetorical analysis. You might be right about the average. But if you're running at T = 1.0, you may be getting a different labeling of the same sentences every time you press run. A replication study by another lab using the same prompt gets different results — not because their setup is wrong, but because neither of you pinned down the parameter that determines reproducibility.

This is what the decoupling of accuracy and consistency means: **a single accurate run does not guarantee a reproducible one.**

The practical guidance is straightforward:

**Use low temperature (T ≤ 0.2).** Consistency was highest here — above 0.94 overall — and classification performance was identical. There is no tradeoff. You gain nothing by going higher for classification tasks.

**Run an inter-iteration reliability check before analyzing your full corpus.** Run the model 10–20 times on a small subset of your data. Calculate Krippendorff's α across those runs. If it falls below 0.67, your prompt may need refinement, or the category distinctions may be too ambiguous for the model to apply consistently. This is the same reliability check we already apply to human coders — it should apply to automated annotation too.

**Report your settings.** Temperature, number of test runs, and inter-iteration reliability scores should appear in any study using LLM annotation. Right now, many papers don't list them. That needs to change.

## The Texture of the Task

One of the more interesting patterns in the data: consistency didn't degrade uniformly. Some rhetorical categories held up well even at higher temperatures. Others collapsed.

"Indicating a gap" (Step 2b) was remarkably stable. It makes sense — this step tends to co-occur with phrases like *however* or *no study has examined*, giving the model a clear linguistic signal. The model latches onto it.

"Topic generalizations" (Step 1b) and "reviewing previous research" (Step 1c) were far more volatile. These are categories where the function isn't marked on the surface — you have to read the surrounding context to understand whether a sentence is establishing background or summarizing a specific study. Higher temperatures made the model more likely to waver between defensible interpretations.

Where the model is inconsistent is where the task is hard. And that boundary — the rhetorical gray zones that even skilled human annotators disagree on — is genuinely interesting territory for the field to keep exploring.

## What Comes Next

This study used a fixed zero-shot prompt to isolate the effect of temperature. A lot of variables were deliberately held constant: prompting strategy, model size, corpus domain (all biology), annotation framework. Each of those is its own research question.

We also don't yet know how reasoning models, which generate chain-of-thought before outputting labels, respond to temperature differently from direct output models. That's a live question.

But the core finding should hold across contexts. Temperature is a property of how transformers sample tokens. Lower temperatures narrow the distribution. Narrower distributions produce more consistent outputs. That mechanism doesn't change with the task.

What *can* change is where the thresholds fall — and that's exactly why inter-iteration reliability testing matters. The threshold will be different for different frameworks, models, and prompting setups. The point is to measure it rather than assume it.

The full replication package — code, data, all 450,000+ annotations, and validation scripts — is openly available at [github.com/larrygrpolanco/llm-temperature-consistency](https://github.com/larrygrpolanco/llm-temperature-consistency).

Applied linguists now have tools that can annotate corpora at a scale that was unthinkable a decade ago. What we're working out now is how to use them rigorously — and that's the right problem to be working on.
