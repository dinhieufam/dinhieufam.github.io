---
layout: post
title: "Why Everyone Is Talking About World Models — Thoughts From Someone Without 100,000 GPUs"
date: 2026-06-22 00:00:00 +0700
description: A personal take on the rise of world models, why frontier labs are investing in them, and where smaller teams can still build meaningful things.
tags: world-models artificial-intelligence robotics foundation-models
categories: machine-learning
featured: true
related_posts: false
---

Over the past few months, I have noticed a shift in conversations about AI.

A year or two ago, everyone seemed to be talking about larger language models: more parameters, more tokens, and more benchmarks. Today, it feels like everyone is talking about **world models**.

Every week brings new papers, startups, and research directions built around the idea that AI should not merely process descriptions of reality, but develop some internal representation of how reality behaves.

At first, I found the excitement a little confusing. Language models already feel magical. They can write code, answer questions, summarize books, and help design software. Why is the industry suddenly obsessed with something else?

The more I read, the more I think the appeal comes down to a simple distinction:

> Language models primarily learn from descriptions of the world. World models aim to learn how the world changes.

That is a much bigger ambition.

> A note on terminology: “world model” is a broad and sometimes loosely used term. Here, I mean a model that learns representations of an environment, predicts how it may evolve, and helps an agent reason about the consequences of actions.

## The dream: generating futures, not just words

Imagine asking an AI:

> What is likely to happen if I make this business decision?

Or:

> What happens if this robot takes two steps forward and pushes that object?

Or:

> What are the likely outcomes of this scientific experiment?

Current language models can produce plausible answers, often by drawing on patterns expressed in their training data. A world model aims to do something deeper: form an internal representation of a situation, simulate possible transitions, and predict what may happen next.

In that sense, it is less about generating words and more about generating futures.

If language models are autocomplete for text, world models aspire to become autocomplete for reality.

## Why frontier labs care so much

I see two main reasons.

### Capability

Many of the hardest AI problems require understanding how actions lead to consequences:

- robotics;
- autonomous driving;
- scientific discovery;
- embodied agents; and
- long-horizon planning.

These problems are difficult because the model must reason about environments that change over time. Producing convincing language is not enough. An effective system needs to anticipate motion, uncertainty, interaction, failure, and the downstream effects of its own decisions.

### Data and scaling

The supply of high-quality human-written text is large but not unlimited. As language models consume more of it, simply adding more text and computation may deliver diminishing returns.

The physical and digital worlds, however, continuously produce new signals: videos, interactions, sensor readings, experiments, simulations, and human behavior. These sources are not automatically useful—collecting and curating them is difficult—but they offer a training signal far richer than text alone.

From the perspective of a frontier lab, learning from those signals is an obvious direction to explore.

## The part that makes me uneasy

Whenever I read about world models, I get excited.

Then I remember who is building them.

The organizations leading this race have access to resources that most people can barely imagine: massive GPU clusters, proprietary datasets, specialized research teams, robot fleets, and vehicles collecting data every second.

When I see a paper trained on millions of video clips or a system requiring enormous computational resources, I sometimes wonder: **what does this mean for the rest of us?**

Independent developers, hobbyists, students, university labs, and small startups are not operating on the same playing field. That is not necessarily a reason to give up, but it should change how we think about participating in the future of AI.

## We probably will not train the next frontier world model

This is something I have gradually accepted.

I probably will not train the next frontier world model. Most people reading this probably will not either.

That is not because we are less capable. The economics are simply different.

The cost of collecting data, running experiments, and training these systems is becoming concentrated among a small number of organizations. The gap between **using AI**, **researching AI**, and **building frontier foundation models** continues to grow.

Sometimes, I think people underestimate how much those distinctions matter. Reading a paper and reproducing it are very different tasks. Reproducing it and competing with the original lab are further apart still.

## But history gives me hope

Fortunately, this pattern is not unique to AI.

The organizations that built internet infrastructure were not the only ones that created value on top of it. Smartphone manufacturers were not the only winners of the mobile revolution. Most successful software companies do not build operating systems; they build products using them.

I suspect something similar will happen with world models.

The foundational layer may belong to a relatively small number of organizations. The opportunity layer above it could be much larger.

That is where most builders can contribute.

## Where small teams still matter

If I were starting something today, I would not try to compete directly with the largest AI labs. I would look for leverage instead.

- Can I build better tools around these models?
- Can I adapt them to a domain the foundation-model lab does not understand deeply?
- Can I create a workflow that makes the technology reliable and useful?
- Can I solve a real problem for a specific group of users?
- Can I evaluate these systems more honestly or make them safer to deploy?

Small teams can often move faster, understand narrow problems better, and stay closer to users. They may not own the foundational model, but they can still own the context, interface, data pipeline, evaluation process, or product that makes the model valuable.

The headlines focus on the models. The opportunities often emerge somewhere else.

## My current take

I think world models matter. They are likely to play an important role in more capable robots, agents, and decision-making systems.

I also think they are surrounded by a great deal of hype.

Building a model that genuinely understands reality is an extraordinarily difficult problem. The real world is messy. Humans are unpredictable. Physics is complicated. Observations are incomplete. Context matters. Unlike a language benchmark, reality rarely provides a clean score telling us whether a model truly understands what is happening.

So I am watching the race with interest, but I am not losing sleep trying to join it at the infrastructure level. I am more interested in understanding where these technologies are heading, what they will make possible, and how smaller builders can use them thoughtfully.

If previous technology waves teach us anything, it is this:

> You do not have to build the foundation to build something meaningful on top of it.

For most of us, that may be where the most interesting opportunities are anyway.
