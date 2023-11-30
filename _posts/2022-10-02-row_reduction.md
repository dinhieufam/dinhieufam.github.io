---
title: 'Row reduction with elementary matrices'
date: 2022-10-02
permalink: /posts/row_reduction/
tags:
  - tutorial
  - mathematics
  - linear algebra
---

_In this post we discuss the row reduction algorithm for solving a system of linear equations that have exactly one solution. We will then show how the row reduction algorithm can be represented as a process involving a sequence of matrix multiplications involving a special class of matrices called elementary matrices. That is, each elementary matrix represents a single elementary row operation in the row reduction algorithm._

Introduction
------------

In a [previous blog post](https://mbernste.github.io/posts/systems_linear_equations/), we showed how systems of linear equations can be represented as a matrix equation. For example, the system of linear equations,

$$\begin{align*}a_{1,1}x_1 + a_{1,2}x_2 + a_{1,3}x_3 &= b_1 \\ a_{2,1}x_1 + a_{2,2}x_2 + a_{2,3}x_3 &= b_2 \\ a_{3,1}x_1 + a_{3,2}x_2 + a_{3,3}x_3 &= b_3 \end{align*}$$

can be represented succinctly as

$$\boldsymbol{Ax} = \boldsymbol{b}$$

where $\boldsymbol{A}$ is the matrix of coefficients $a_{1,1}, a_{1,2}, \dots, a_{3,3}$ and $\boldsymbol{b}$ is the matrix of coefficients of $b_1, b_2,$ and $b_3$.  Furthermore, we noted that this system will have exactly one solution if $\boldsymbol{A}$ is an [invertible matrix](https://mbernste.github.io/posts/inverse_matrices/). 

In this post, we will discuss how one can solve for this exact solution using a process called called **row reduction** which entails performing a series of algebraic operations on the system. We will then show how the row reduction algorithm can be represented as a process that entails [multiplying](https://mbernste.github.io/posts/matrix_multiplication/) $\boldsymbol{A}$ by a series of matrices called **elementary matrices** in order to convert $\boldsymbol{A}$ to the identity matrix. Each elementary matrix represents a single step of the row reduction algorithm. 

Row reduction
--------------

Before digging into matrices, let's first discuss how one can go about solving a system of linear equations. Say we have a system with three equations and three variables:

$$\begin{align*}a_{1,1}x_1 + a_{1,2}x_2 + a_{1,3}x_3 &= b_1 \\ a_{2,1}x_1 + a_{2,2}x_2 + a_{2,3}x_3 &= b_2 \\ a_{3,1}x_1 + a_{3,2}x_2 + a_{3,3}x_3 &= b_3 \end{align*}$$

To solve such a system, our goal is perform simple algebraic operations on these equations until we convert the system to one with the following form:

$$\begin{align*}x_1 &= c_1 \\ x_2 &= c_2 \\ x_3 &= c_3 \end{align*}$$

where $c_1, c_2$, and $c_3$ are the solutions to the system -- that is, they are the values we can assign to $x_1, x_2$, and $x_3$ so that all of the equations in the system are valid.  

Now, what kinds of algebraic operations can we perform on the equations of the system to solve it? There are three main categories, called **elementary row operations** (we'll see soon, why they have this name):

1. **Scalar multiplication**: Simply multiply both sides of one of the equations by a scalar.
2. **Row swap**: You can move one equation above or below another. Note, the order the equations are written is irrevalent to the solution, so swapping rows is really just changing how we organize the formulas. Nonetheless, this organization will be important as we demonstrate how elementary matrices can be used to solve the system.
3. **Row sum**: Add a multiple of one equation to another. This is valid because if the equality of each equation holds, then adding a muliple of one equation to another is just adding the quantity on each side of the equals sign of the first equation (which are the same quantity) to each side of the second equation (which are also equal) thus maintaining the equality in the second equation.

Let's use these operations to solve the following system:

$$\begin{align*}-x_1 - 2 x_2 + x_3 &= -3 \\  3 x_2 &= 3 \\ 2 x_1 + 4 x_2  &= 10\end{align*}$$

1\. First, we _row swap_ the first and third equations:

$$\begin{align*}2 x_1 + 4 x_2 &= 10  \\ 3 x_2  &= 3 \\ -x_1 - 2 x_2 + x_3 &= -3\end{align*}$$

2\. Next, let's perform _scalar multiplication_ and multiply the first equation by 1/2:

$$\begin{align*}x_1 + 2 x_2 &= 5  \\ 3 x_2 &= 3 \\ -x_1 - 2 x_2 + x_3 &= -3\end{align*}$$

3\. Next, let's perform a _row sum_ and add the first row to the third:

$$\begin{align*}x_1 + 2 x_2 &= 5  \\  3 x_2  &= 3 \\ x_3 &= 2\end{align*}$$

4\. Next, let's perform _scalar multiplication_ and multiply the second equation by 1/3:

$$\begin{align*}x_1 + 2 x_2 &= 5  \\ x_2 &= 1 \\  x_3 &= 2\end{align*}$$

5\. Finally, let's perform a _row sum_ and add -2 multiplied by the second row to the first:

$$\begin{align*}x_1 &= 3  \\ x_2 &= 1 \\ x_3 &= 2\end{align*}$$

And there we go, we've solved the system using these elementary row operations. This process of using elementary row operations to solve a system of linear equations is called **row reduction**.

Elementary row operations in matrix notation
--------------------------------------------

Recall, we can represent a system of linear equations as a [matrix equation](https://mbernste.github.io/posts/systems_linear_equations/). For example, the linear system that we just solved can be written as:

$$\begin{bmatrix}-1 & -2 & 1 \\ 0 & 3 & 0 \\ 2 & 4 & 0 \end{bmatrix}\begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} = \begin{bmatrix}-3 \\ 3 \\ 10\end{bmatrix}$$

When solving the system using the elementary row operations, we needn't write out all of the equations. Really, all we need to do is keep track of how $\boldsymbol{A}$ and $$\boldsymbol{b}$$ are being transformed upon each iteration. For ease of notation, we can join $\boldsymbol{A}$ and $\boldsymbol{b}$ into a single matrix, called an **augmented matrix**. In our example, this augmented matrix would look like:

$$\begin{bmatrix}-1 & -2 & 1 & -3 \\ 0 & 3 & 0 & 3 \\ 2 & 4 & 0 & 10 \end{bmatrix}$$

In the augmented matrix, the final column stores $\boldsymbol{b}$ and all of the previous columns store the columns of $\boldsymbol{A}$. Our execution of the row operations can now operate only on this augmented matrix as follows:

1\. _Row swap_: swap the first and third equations:

$$\begin{bmatrix}2 & 4 & 0 & 10 \\ 0 & 3 & 0 & 3 \\ -1 & -2 & 1 & -3  \end{bmatrix}$$

2\. _Scalar multiplication_: Multiply the first equation by 1/2:

$$\begin{bmatrix}1 & 2 & 0 & 5 \\ 0 & 3 & 0 & 3 \\ -1 & -2 & 1 & -3  \end{bmatrix}$$

3\. _Row sum_: add the first row to the third:

$$\begin{bmatrix}1 & 2 & 0 & 5 \\ 0 & 3 & 0 & 3 \\ 0 & 0 & 1 & 2  \end{bmatrix}$$

4\. _Scalar multiplication_: Multiply the second equation by 1/3:

$$\begin{bmatrix}1 & 2 & 0 & 5 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 2  \end{bmatrix}$$

5\. _Row sum_ and add -2 multiplied by the second row to the first:

$$\begin{bmatrix}1 & 0 & 0 & 3 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 2  \end{bmatrix}$$

Now, let's re-write the augmented matrix as a matrix equation:

$$\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}\begin{bmatrix}x_1 \\ x_2 \\ x_3\end{bmatrix} = \begin{bmatrix}3 \\ 1 \\ 2\end{bmatrix}$$

Note that $$\boldsymbol{A}$$ has been _transformed_ into the identity matrix $$\boldsymbol{I}$$. This will be a key observation as we move into the next section.

Elementary matrices
-------------------

Notice how during the row reduction process we transformed the matrix $\boldsymbol{A}$ using a series of steps until it became the identity matrix $\boldsymbol{I}$. In fact, each of these elementary row operations can be represented as a matrix. Such a matrix that represents an elementary row operation is called an **elementary matrix**. 

To demonstrate how our elementary row operations can be performed using matrix multiplication, let's look back at our example. We start with the matrix 

$$\boldsymbol{A} := \begin{bmatrix}-1 & -2 & 1 \\ 0 & 3 & 0 \\ 2 & 4 & 0 \end{bmatrix}$$

Then, first we _row swap_ the first and third equations:

$$\underbrace{\begin{bmatrix}0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{bmatrix}}_{\boldsymbol{E}_1} \underbrace{\begin{bmatrix}-1 & -2 & 1 \\ 0 & 3 & 0 \\ 2 & 4 & 0 \end{bmatrix}}_{\boldsymbol{A}} = \begin{bmatrix}2 & 4 & 0  \\ 0 & 3 & 0  \\ -1 & -2 & 1  \end{bmatrix}$$

Then perform _scalar multiplication_ and multiply the first equation by 1/2:


$$\underbrace{\begin{bmatrix}1/2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}}_{\boldsymbol{E_2}} \underbrace{\begin{bmatrix}2 & 4 & 0 \\ 0 & 3 & 0 \\ -1 & -2 & 1  \end{bmatrix}}_{\boldsymbol{E}_1\boldsymbol{A}}  = \begin{bmatrix}1 & 2 & 0 \\ 0 & 3 & 0 \\ -1 & -2 & 1  \end{bmatrix}$$

Then perform a _row sum_ and add the first row to the third:

$$\underbrace{\begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{bmatrix}}_{\boldsymbol{E}_3} \underbrace{\begin{bmatrix}1 & 2 & 0 \\ 0 & 3 & 0 \\ -1 & -2 & 1  \end{bmatrix}}_{\boldsymbol{E}_2\boldsymbol{E}_1\boldsymbol{A}} = \begin{bmatrix}1 & 2 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix}$$

Then perform _scalar multiplication_ and multiply the second equation by 1/3:

$$\underbrace{\begin{bmatrix}1 & 0 & 0 \\ 0 & 1/3 & 0 \\ 0 & 0 & 1 \end{bmatrix}}_{\boldsymbol{E}_4} \underbrace{\begin{bmatrix}1 & 2 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{bmatrix}}_{\boldsymbol{E}_3\boldsymbol{E}_2\boldsymbol{E}_1\boldsymbol{A}} = \begin{bmatrix}1 & 2 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1  \end{bmatrix}$$

Then perform a _row sum_ and add -2 multiplied by the second row to the first:

$$\underbrace{\begin{bmatrix}1 & -2 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}}_{\boldsymbol{E}_5} \underbrace{\begin{bmatrix}1 & 2 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1  \end{bmatrix}}_{\boldsymbol{E}_4\boldsymbol{E}_3\boldsymbol{E}_2\boldsymbol{E}_1\boldsymbol{A}} = \begin{bmatrix}1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1  \end{bmatrix}$$

Notice, we've derived a series of matrices that when multiplied by $\boldsymbol{A}$ produces the identity matrix:

$$\boldsymbol{E}_5\boldsymbol{E}_4\boldsymbol{E}_3\boldsymbol{E}_2\boldsymbol{E}_1\boldsymbol{A} = \boldsymbol{I}$$

By the [definition of an inverse matrix](https://mbernste.github.io/posts/inverse_matrices/), we see that the matrix formed by $\boldsymbol{E}_5\boldsymbol{E}_4\boldsymbol{E}_3\boldsymbol{E}_2\boldsymbol{E}_1$ is the inverse of $\boldsymbol{A}$! That is,

$$\boldsymbol{A}^{-1} = \boldsymbol{E}_5\boldsymbol{E}_4\boldsymbol{E}_3\boldsymbol{E}_2\boldsymbol{E}_1$$

Thus, we have found a way to decompose the inverse of $\boldsymbol{A}$ into a set of matrices that when multiplied together yield its inverse. Each of these matrices represents a transformation on $\boldsymbol{A}$ equivalent to an elementary row operation that one would use to solve an equation of the form $\boldsymbol{Ax} = \boldsymbol{b}$!

