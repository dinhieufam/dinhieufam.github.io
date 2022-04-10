---
title: 'Functionals and functional derivatives'
date: 2022-04-10
permalink: /posts/functionals/
tags:
  - tutorial
  - mathematics
  - calculus of variations
---

_The calculus of variations is a field of mathematics that deals with the optimization of functions of functions, called functionals, not often taught in computer science curricula, but lays the foundation for a number of important concepts and algorithms in machine learning and statistical inference. In this post, I will provide a high-level overview of functionals and the definition of the functional derivative._

Introduction
------------

Multivariate calculus concerns itself with infitesimal changes of numerical functions -- that is, functions that accept a vector of real-numbers and output a real number:

$$f : \mathbb{R}^n \rightarrow \mathbb{R}$$

In this blog post, we discuss the **calculus of variations**, a field of mathematics that generalizes the ideas in multivariate calculus relating to infinitesimal changes of traditional numeric functions to _functions of functions_.  Such functions of functions are called **functionals**. That is, if $\mathcal{F}$ is a set of functions, then 

$$F : \mathcal{F} \rightarrow \mathbb{R}$$

is a functional.

Functionals are quite prevalent in machine learning and statistical inference. For example, [information entropy](https://mbernste.github.io/posts/entropy/) can be considered a functional on probability mass functions. For a given [discrete random variable](https://mbernste.github.io/posts/measure_theory_2/), $X$, entropy can be thought about as a function that accepts as input $X$'s probability mass function, $p_X$, and outputs a real number:

$$H(p_X) := -\sum_{x \in \mathcal{X}} p_X(x) \log p_X(x)$$

where $\mathcal{X}$ is the [support](https://en.wikipedia.org/wiki/Support_(mathematics)) of $p_X$. 

Another example of a functional is the [evidence lower bound (ELBO)](https://mbernste.github.io/posts/elbo/), a function that, like entropy, operates on probability distributions. The ELBO is a foundational quantity used in the popular [EM algorithm](https://mbernste.github.io/posts/em/) and [variational inference](https://mbernste.github.io/posts/variational_inference/), two frameworks used to perform  statistical inference with probabilistic models. 

In this blog post, we will review some concepts in traditional calculus such as partial derivatives, gradients, and directional derivatives in order to introduce the definition of the **functional derivative**, which is simply the generalization of the derivative of numeric functions to functionals!

A review of partial derivatives, gradients, and directional derivatives
-----------------------------------------------------------------------

In this section, we will introduce a few important concepts in multivariate calculus: partial derivatives, gradients, and directional derivatives. For the remainder of this section, we will consider a continous function $f$ that maps real-valued vectors $\mathcal{x} \in \mathbb{R}^n$ to real-numbers. That is,

$$f: \mathbb{R}^n \rightarrow \mathbb{R}$$

### Partial derivatives

Given $\boldsymbol{x} \in \mathbb{R}^n$, the **partial derivative** of $f$ with respect to the $i$th component of $\boldsymbol{x}$, denoted $\frac{\partial f(\boldsymbol{x})}{\partial x_i}$ is simply the derivative of $f$ if we hold all the components of $\boldsymbol{x}$ fixed, except for the $i$the component. Said differently, it tells us the rate of change of $f$ with respect to the $i$th dimension of the vector space in which $\boldsymbol{x}$ resides! This can be visualized below for a function $f : \mathbb{R}^2 \rightarrow \mathbb{R}:

<center><img src="https://raw.githubusercontent.com/mbernste/mbernste.github.io/master/images/partial_derivative.png" alt="drawing" width="450"/></center>

As seen above, the partial derivative $\frac{f(\boldsymbol{x})}{\partial x_1}$ is simply the derivative of the function $f(x_1, x_2)$ when holding $x_1$ as fixed. That is, it is the slope of the line tangent to the function of $f(x_1, x_2)$ when $x_1$ is fixed.

### Directional derivatives

We can see that the partial derivative of $f(\boldsymbol{x})$ with respect to the $i$th dimension of the vector space can be expressed as

$$\frac{\partial f(\boldsymbol{x})}{\partial x_i} := \lim_{h \rightarrow 0} \frac{f(\boldsymbol{x} + h\boldsymbol{e}_i) - f(\boldsymbol{x})}{h}$$

where $\boldsymbol{e}_i$ is the $i$th [standard basis vector](https://en.wikipedia.org/wiki/Standard_basis) -- that is, the vector of all zeroes except for a one in the $i$th position.

Geometrically, we can view the $i$th partial derivative of $f(\boldsymbol{x})$ as $f$'s rate of change along the direction of the $i$th standard basis vector of the vector space.  

Thinking along these lines, there is nothing stopping us from generalizing this idea to _any unit vector_ rather than just the standard basis vectors. Given some unit vector $\boldsymbol{v}$, we define the **directional derivative** of $f(\boldsymbol{x})$ along the direction of $\boldsymbol{v}$ as

$$D_{\boldsymbol{v}}f(\boldsymbol{x}) := \lim_{h \rightarrow 0} \frac{f(\boldsymbol{x} + h\boldsymbol{v}) - f(\boldsymbol{x})}{h}$$

Geometrically, this is simply the rate of change of $f$ along the direction at which $\boldsymbol{v}$ is pointing! This can be viewed geometrically below:

<center><img src="https://raw.githubusercontent.com/mbernste/mbernste.github.io/master/images/directional_derivative.png" alt="drawing" width="450"/></center>

For a given vector $\boldsymbol{v}$, we can derive a formula for $D_{\boldsymbol{v}}f(\boldsymbol{x})$. That is, we can show that:

$$D_{\boldsymbol{v}}f(\boldsymbol{x}) = \sum_{i=1}^n \left( \frac{\partial f(\boldsymbol{x})}{\partial x_i} \right) v_i$$

See Theorem 1 in the Appendix of this post for a proof of this equation.  Now, if we define the vector of all partial derivatives $f(\boldsymbol{x})$ as

$$\nabla f(\boldsymbol{x}) := \begin{bmatrix}\frac{\partial f(\boldsymbol{x})}{\partial x_1} & \frac{\partial f(\boldsymbol{x})}{\partial x_2} & \dots & \frac{\partial f(\boldsymbol{x})}{\partial x_n} \end{bmatrix}$$

Then we can represent the directional derivative as simply the [dot product](https://en.wikipedia.org/wiki/Dot_product) between $\nabla f(\boldsymbol{x})$ and $\boldsymbol{v}$:

$$D_{\boldsymbol{v}}f(\boldsymbol{x}) := \nabla f(\boldsymbol{x}) \cdot \boldsymbol{v}$$


### Gradients

The vector of partial derivatives, $\nabla f(\boldsymbol{x})$, as defined above is the called the **gradient vector** of $f$ at $\boldsymbol{x}$. It turns out that the gradient vector points in the _direction of steepest ascent_ along $f$'s surface at $\boldsymbol{x}$. This can be shown geometrically below:

<center><img src="https://raw.githubusercontent.com/mbernste/mbernste.github.io/master/images/gradient.png" alt="drawing" width="450"/></center>


We prove this property of the gradient vector in Theorem 2 of the Appendix to this post.


Functional derivatives
----------------------

Now, we will seek to generalize the notion of the directional derivative to functionals. We'll let $\mathcal{F}$ be some set of functions, and for simplicity, we'll let each $f$ be a continuous real-valued function. That is, for each $f \in \mathcal{F}$, we have $f: \mathbb{R} \rightarrow \mathbb{R}$.  Then, we'll consider a functional $F$ that maps each $f \in \mathcal{F}$ to a number. That is,

$$F: \mathcal{F} \rightarrow \mathbb{R}$$

Now, we're going to spoil the punchline. Given a function $f \in \mathcal{F}$ and arbitrary function $\phi \in \mathcal{F}$, the **functional derivative** of $F$ at $f$, denoted $\frac{\partial{F}}{\partial f}$, is defined to be the function for which:

$$\int \frac{\partial F}{\partial f}(x) \eta(x) \ dx = \lim_{\epsilon \rightarrow 0}\frac{F(f + \epsilon \eta) - F(f)}{\epsilon}\bigg\rvert_{\epsilon=0}$$

where $\epsilon$ is a scalar and $\eta$ is an arbitrary function in $\mathcal{F}$.

Woah. What is going on here? How on earth does this define the functional derivative? And why is the functional derivative, $\frac{\partial{F}}{\partial f}$ buried inside this complex equation?

Let's break it down.

Recall that for a plain old function on the real numbers $g: \mathbb{R} \rightarrow \mathbb{R}$, the derivative of $\frac{dg(x)}{dx}$ tells us how much $g$ is changing at $x$. Said differently, it asks, if we change $x$ by an infinitesimal amount, how much does $g$ change? The functional derivative of $F$ at a given input function $f$ should answer this same question. That is, if we change $f$ by an infinitesimal amount, how does $F$ change?

Now, this just leads to the question: what does it mean to "change $f$ by an infinitesimal amount"? To define this rigorously, we'll consider an arbitrary real number $\epsilon \in \mathbb{R}$ and an arbitrary function $\eta: \mathbb{R} \rightarrow \mathbb{R}$. 


Intuitively, what we're going to do is we're going to shrink $\epsilon$ down to an infinitesimaly small number. This will make make the function $f + \epsilon \eta$ arbitrarily close to $f$. We depict this schematically below:



Notice that $f + \epsilon \eta$ is a function that can be "fed" to $F$. Thus, we can see that $f + \epsilon \eta$ is the "infinitesimal" change to $f$ that we're looking for. The quantity $\epsilon \eta$ is called a **variation** of $f$ (hence the word "variational" in the name "calculus of variations"). 

Let's now go a step further and consder $f$ and $\eta$ to be fixed, but we'll let $\epsilon$ vary. That is, we will let $\epsilon$ be a variable that is free to be changed. We thus see that $F(f + \epsilon \eta)$ is a function of $epsilon$ and thus, is simply an ordinary numerical function mapping numbers to numbers. That is, we can let $L(\epsilon) := F(f + \epsilon \eta)$ and realize that $L : \mathbb{R} \rightarrow \mathbb{R}$.  

Appendix
--------

<span style="color:#0060C6">**Theorem 1:** Given a differentiable function $f : \mathbb{R}^n \rightarrow \mathbb{R}$, vectors $\boldsymbol{x}, \boldsymbol{v} \in \mathbb{R}^n$, where $\boldsymbol{v}$ is a unit vector, then $D_{\boldsymbol{v}} f(\boldsymbol{x}) = \sum_{i=1}^n \left( \frac{\partial f(\boldsymbol{x})}{\partial x_i} \right) v_i$.</span>

**Proof:**

Consider $\boldsymbol{x}$ and $\boldsymbol{v}$ to be fixed and let $g(z) := f(\boldsymbol{x} + z\boldsymbol{v})$. Then,

$$\frac{dg(z)}{dz} = \lim_{h \rightarrow 0} \frac{g(z+h) - g(z)}{h}$$

Evaluating this derivative at $z = 0$, we see that 

$$\begin{align*} \frac{dg(z)}{dz}\bigg\rvert_{z=0} &= \frac{g(h) - g(0)}{h} \\ &= \frac{g(\boldsymbol{x} + h\boldsymbol{v}) - f(\boldsymbol{x})}{h} \\ &= D_{\boldsymbol{v}} f(\boldsymbol{x})  \end{align*}$$

We can then apply the [multivariate chain rule](https://en.wikipedia.org/wiki/Chain_rule#Multivariable_case) and see that

$$\frac{dg'(z)}{dz} = \sum_{i=1}^n D_i f(\boldsymbol{x} + z\boldsymbol{v}) \frac{d (x_i + zv_i)}{dz}$$

where $D_i f(\boldsymbol{x} + z\boldsymbol{v})$ is the partial derivative of $f$ with respect to it's $i$th argument when evaluated at $\boldsymbol{x} + z\boldsymbol{v}$.

Now, evaluating this derivative at $z = 0$, we see that

$$\begin{align*} \frac{dg(z)}{dz}\bigg\rvert_{z=0} &= \sum_{i=1}^n D_i f(\boldsymbol{x}) v_i \\ &= \sum_{i=1}^n \frac{f(\boldsymbol{x})}{\partial \boldsymbol{x}_i} v_i \end{align*}$$ 

Putting these two results together, we see that

$$D_{\boldsymbol{v}} f(\boldsymbol{x}) = \sum_{i=1}^n \frac{f(\boldsymbol{x})}{\partial \boldsymbol{x}_i} v_i$$

$\square$

