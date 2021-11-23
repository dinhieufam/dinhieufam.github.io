---
title: 'Normed vector spaces'
date: 2021-11-23
permalink: /posts/normed_vector_space/
tags:
  - tutorial
  - mathematics
  - linear algebra
---

THIS POST IS CURRENTLY UNDER CONSTRUCTION

Introduction
------------

A **normed vector space** is a vector space in which each vector is associated with a scalar value called a **norm**.  In a standard Euclidean vector spaces, the lengths of each vector is a norm:

<center><img src="https://raw.githubusercontent.com/mbernste/mbernste.github.io/master/images/Norm.png" alt="drawing" width="200"/></center>

The definition of a norm, however, generalizes this notion of length to any vector space.  

<span style="color:#0060C6">**Definition 1 (normed vector space):** A **normed vector space** is vector space $(\mathcal{V}, \mathcal{F})$ associated with a function $\|\|.\|\| : \mathcal{V} \rightarrow \mathbb{R}$ that obeys the following axioms:</span>

1. <span style="color:#0060C6">$\forall \boldsymbol{v} \in \mathcal{V}, \ \ \|\|\boldsymbol{v}\|\| \geq 0$</span>  
2. <span style="color:#0060C6">$\forall \boldsymbol{v} \in \mathcal{V}, \forall \alpha \in \mathcal{F}, \ \ \|\|\alpha\boldsymbol{v}\|\| = |\alpha| \|\|\boldsymbol{v}\|\|$</span>  
3. <span style="color:#0060C6">$\forall \boldsymbol{v}, \boldsymbol{u} \in \mathcal{V}, \ \ \|\|\boldsymbol{u} + \boldsymbol{v}\|\| \leq \|\|\boldsymbol{u}\|\| + \|\|\boldsymbol{v}\|\|$</span>   

Intuition
---------

The norm of a vector captures the a notion of "length" for a vector.  Below we outline the intuition behind each axiom in the definition above and describe how these axioms capture this idea of length:

* Axiom 1 says that all vectors should have a positive length.  This enforces our intuition that a "length'' is a positive quantity.
* Axiom 2 says that if we multiply a vector by a scalar, it's length should increase by the magnitude (i.e. the absolute) value of that scalar. This axiom ties together the notion of scaling vectors (Axiom 6 in the definition of a vector space) to the notion of "length" for a vector.  It essentially says that to scale a vector is to stretch the vector.
* Axiom 3 says that the length of the sum of two vectors should not exceed the sum of the lengths of each vector.  This enforces our intuition that if we add together two objects that each have a "length", the resultant object should not exceed the sum of the lengths of the original objects.

Following the axioms for a normed vector space, one can also show that only the zero vector has zero length (Theorem 1 in the Appendix to this post).
  
Unit vectors
------------

In a normed vector space, a **unit vector** is a vector with norm equal to 1. Given a vector $\boldsymbol{v}$, a unit vector can be derived by simply dividing the vector by its norm (Theorem 2 in the Appendix).  This unit vector, called the **normalized vector** of $\boldsymbol{v}$ is denoted $\hat{\boldsymbol{v}}$.  In a Euclidean vector space, the normalized vector $\hat{\boldsymbol{v}}$ is the unit vector that points in the same direction as $\boldsymbol{v}$.  
 
Unit vectors are important because they generalize the idea of "direction" in Euclidean spaces to vector spaces that are not Euclidean. In a Euclidean space, the unit vectors all fall in a sphere of radius one around the origin:

<center><img src="https://raw.githubusercontent.com/mbernste/mbernste.github.io/master/images/UnitVectors.png" alt="drawing" width="200"/></center>

Thus, the set of all unit vectors can be used to define the set of all "directions" that vectors can point in the vector space. Because of this, one can form any vector by decomposing it into a unit vector multiplied by some scalar.  In this way, unit vectors generalize the notion of "direction" in a Euclidean vector space to non-Euclidean vector spaces.
 
Normed vector spaces are also metric spaces
-------------------------------------------
  
All normed vector spaces are also [metric spaces](https://en.wikipedia.org/wiki/Metric_(mathematics)) -- that is, the norm function induces a metric function on pairs of vectors that can be interpreted as a "distance" between them. This metric is defined simply as:

$$d(\boldsymbol{x}, \boldsymbol{y}) := \|\boldsymbol{x} - \boldsymbol{y}\|$$

That is, if one subtracts one vector from the other, then the "length" of the resultant vector can be interpreted as the "distance" between those vectors. 

In the figure below we show how the norm can be used to form a metric between Euclidean vectors. On the left, we depict two vectors, $\boldsymbol{v}$ and $\boldsymbol{u}$, as arrows. On the right we depict these vectors as points in Euclidean space. The distance between these points is given by the norm of the difference vector between $\boldsymbol{u}$ and $\boldsymbol{v}$.  

<center><img src="https://raw.githubusercontent.com/mbernste/mbernste.github.io/master/images/NormAsMetric.png" alt="drawing" width="400"/></center>

In Theorem 2 in the Appendix, we prove that that this function is a valid metric in that it satisfies the axioms of a metric function.

Appendix
--------

<span style="color:#0060C6">**Theorem 1 (Only the zero vector has zero norm):** $\vert\vert \boldsymbol{v} \vert\vert = 0 \iff \boldsymbol{v} = \boldsymbol{0}$</span>

**Proof:**

$$\begin{align*}\vert\vert \boldsymbol{0} \vert\vert &= \vert\vert 0 \boldsymbol{v} \vert\vert && \text{for any vector $\boldsymbol{v} \in \mathcal{V}$} \\
&= \vert 0 \vert \vert\vert \boldsymbol{v} \vert\vert  && \text{by Axiom 2} \\ &= 0\end{align*}$$

$\square$