---
layout: post
title: "AI Looks Easy Until You Put It in a Robot"
date: 2026-06-22 03:15:00 +0700
description: Five assumptions about AI that began to fall apart when I started working with robots in the real world.
tags: robotics artificial-intelligence sim-to-real robot-learning
categories: machine-learning
related_posts: false
---

A few years ago, my mental model of AI was surprisingly simple.

If a system was not performing well, it probably needed one of three things:

- more data;
- a better model; or
- more compute.

After all, this seemed to be the story of modern AI. Larger datasets produced better models. Larger models produced better results. More compute unlocked capabilities that had previously seemed impossible.

Then I started spending more time working in robotics, and many of my assumptions slowly began to break.

They were not completely wrong. Reality was simply much messier than I expected.

## Assumption 1: More data solves most problems

For a long time, I believed that enough data could solve almost anything. The success of deep learning seemed to support this idea.

Need better performance? Collect more examples. Train longer. Scale up.

Then I encountered robotics.

The first surprise was how difficult data collection actually is. On the internet, a vast amount of data already exists. In robotics, you often have to create each useful experience yourself.

Every demonstration takes time. Every experiment requires setup. Every failure has a cost. A robot may collide with something, a sensor may fail, or an entire day of experiments may produce almost nothing useful.

The bottleneck is no longer only training. It is gathering diverse, high-quality experiences from the real world—and doing so safely, consistently, and at a useful scale.

Suddenly, “just get more data” does not sound so simple.

## Assumption 2: Simulation is close enough

When I first saw robotic simulation, I was amazed: controlled environments, unlimited experiments, fast iteration, and no broken hardware. It felt like the ideal solution.

Then I learned about the **reality gap**.

A policy that performs beautifully in simulation can fail almost immediately in the real world. Friction differs. Lighting changes. Sensors are noisy. Objects are slightly misplaced. Actuators have delays and imperfections. Details that seem insignificant in simulation can determine whether a real system succeeds.

Techniques such as domain randomization and system identification can narrow this gap, but they do not make it disappear. Every simulator is still an approximation.

I have come to appreciate how much of robotics is about handling imperfections. Reality refuses to behave exactly like our models.

If it were easy to simulate perfectly, robotics would probably already be solved.

## Assumption 3: Intelligence is the hard part

This one surprised me the most.

Before working in robotics, I assumed intelligence would be the primary challenge: planning, reasoning, and decision-making. Those seemed like the difficult pieces.

In practice, I have spent far more time dealing with everything around intelligence:

- sensors and calibration;
- coordinate frames and transformations;
- synchronization and latency;
- control loops;
- communication failures;
- data pipelines; and
- hardware issues.

The robot might know what to do and still fail because a camera dropped frames, two clocks drifted apart, or a coordinate transform was wrong.

Many robotics failures are not failures of intelligence. They are failures of integration.

The more I work on real systems, the more I realize that intelligence is only one component of capability. A strong model inside a fragile system is still a fragile system.

## Assumption 4: Benchmarks reflect real progress

Like many researchers, I enjoy reading benchmark results. They provide measurable progress, clear comparisons, and simple leaderboards.

But robots do not care about benchmarks.

A robot operating in the real world faces uncertainty that rarely appears in an evaluation dataset. Humans move unpredictably. Objects are not where they are supposed to be. Environments change. Sensors degrade. Rare failures eventually stop being rare when a system runs for long enough.

A model that achieves 99% performance under controlled evaluation may still be unsafe or unreliable in deployment.

Working in robotics has made me value robustness far more than raw performance. Average-case accuracy matters, but so do failure recovery, uncertainty awareness, latency, consistency, and graceful degradation.

The best system is not always the smartest one. Sometimes it is the one that keeps working when everything goes wrong.

## Assumption 5: AI is mostly about models

This may be the biggest lesson of all.

When people discuss AI, the conversation often revolves around architectures: transformers, diffusion models, world models, reasoning models, new papers, new benchmarks, and new scaling laws.

Building real systems has taught me that progress often comes from less glamorous places:

- better datasets;
- better infrastructure;
- better evaluation;
- better interfaces between components; and
- better engineering.

The model matters, but it is rarely the entire story. Sometimes it is not even the most important part.

## Why robotics changed my perspective

I still believe AI is advancing rapidly. I still get excited about new models and research breakthroughs. Robotics has simply given me a different lens through which to view progress.

Language models primarily operate in a world represented through tokens. Robots must operate in the physical world—a world that is noisy, unpredictable, partially observable, and stubbornly resistant to simplification.

Reality does not care about your benchmark score. It does not care about your training loss. It simply presents another edge case and waits to see what happens.

That is what makes robotics so fascinating.

Every experiment is a reminder that intelligence is not merely about producing the right answer. It is about perceiving, deciding, and acting successfully in a world that refuses to stay still.

The more I work in robotics, the more I realize how much we still have left to learn.
