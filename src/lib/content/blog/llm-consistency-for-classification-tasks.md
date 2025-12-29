---
title: 'LLM Consistency for Classification Tasks'
date: '2025-12-28'
description: 'Exploring methods to ensure stable and reproducible classification outputs from LLMs.'
author: 'Larry Grullon-Polanco'
tags: ['LLM', 'Classification', 'Research']
---

# LLM Consistency for Classification Tasks

In the field of linguistics and education research, classification is a fundamental task. Whether it's tagging discourse moves or identifying grammatical errors, consistency is key. When using Large Language Models (LLMs) for these tasks, we encounter a significant challenge: non-determinism.

## The Problem

LLMs are probabilistic by nature. Even with a temperature of 0, slight variations in prompt engineering or even internal model state can lead to different outputs for the same input. For researchers, this is a nightmare for inter-rater reliability.

## Proposed Strategies

1. **Deterministic Decoding**: Always set `temperature: 0`.
2. **Schema Enforcement**: Use tools like JSON schema or Pydantic to force the model into a specific output structure.
3. **Majority Voting**: Run the same prompt multiple times and take the most frequent answer.
4. **Logprobs Analysis**: Examine the confidence levels for specific tokens to identify areas of ambiguity.

## Texture and Flow

At _Kyeol Lab_, we believe that understanding the "grain" of the model's behavior is just as important as the accuracy of the result. By finding where the model struggles to be consistent, we find the "texture" of the linguistic problem itself.

```python
# Example of a structured prompt for consistency
prompt = """
Classify the following discourse move based on the provided schema.
Input: "Can you explain why that is?"
Schema: [Question, Statement, Command, Feedback]
Return only the label.
"""
```

Stay tuned as we release more tools in the **SABR** ecosystem to help researchers manage LLM consistency.
