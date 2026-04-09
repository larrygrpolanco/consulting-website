---
title: "AI Governance in Healthcare: Where's the Line?"
date: '2026-02-10'
description: "When you use an LLM to abstract clinical data, how accurate does it need to be? The interesting part is not the number. It is the process of deciding."
author: 'Larry Grullon-Polanco'
tags: ['AI', 'Healthcare', 'Clinical NLP', 'Governance', 'Moffitt Cancer Center']
published: true
---

Somewhere in the middle of the Moffitt project, someone asked a question that stopped the meeting: *how accurate does it need to be?*

We were evaluating LLM pipelines for extracting structured data from thyroid cancer pathology reports. Things like tumor size, margin status, lymph node involvement. Data that eventually informs treatment decisions. The model was performing well on most fields. Not perfectly. Well.

So: how accurate is accurate enough?

I didn't have a good answer. Neither did anyone else in the room, immediately. That turned out to be the most interesting part of the whole project.

## The Number Is the Easy Part

There's a temptation to treat this as a threshold problem. Pick a number, 95%, 97%, 99%, and declare the system production-ready once it clears it. Clean, auditable, defensible.

The problem is that accuracy percentages don't carry context. 95% accuracy on extracting tumor size is not the same as 95% accuracy on flagging lymph node involvement. The downstream stakes are different. The distribution of errors matters too. Is the model failing randomly, or is it consistently wrong on a particular pattern of report? Who's going to catch the errors that slip through?

A number without answers to those questions isn't a standard. It's a placeholder.

## What Actually Happened

What made the Moffitt project work, to the extent it worked, was that the people who knew the data were in the room the whole time. Not just at the end as reviewers. Throughout.

The physicians understood what the fields meant clinically. The data scientists understood what the model could and couldn't do. The pathologists knew what the reports actually looked like in practice: the abbreviations, the formatting inconsistencies, the language that changed between providers. Nobody had the full picture on their own.

There were moments where someone from one group would flag something the others had missed entirely. A field we thought was clear-cut turned out to have a common documentation pattern that the model misread systematically. We wouldn't have caught it from the accuracy numbers alone. We caught it because a physician recognized what the model was consistently getting wrong and could say *that's because of how this is usually written*.

That kind of knowledge doesn't transfer through a requirements document.

## Trust Is Built, Not Declared

I think the governance question in healthcare AI is less about thresholds and more about process. Trust in the system, from the clinicians who have to use it and the patients whose data it processes, comes from being included in building it. Not from being handed a validation report at the end.

This is harder to operationalize than a percentage. You can't put "domain experts felt heard" in a methods section. But I think it's what actually determines whether a system gets used carefully versus abandoned, or worse, used carelessly.

I'm still figuring out how to think about this. But working on a project where the answer to "is this good enough?" genuinely required multiple perspectives to answer changed how I think about what AI governance actually means in practice. It's not a compliance checklist. It's a conversation that has to stay open.
