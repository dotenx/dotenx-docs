---
sidebar_position: 1
title: Quick start
---

# Getting started

DoTenX helps you build the back-end of any web or mobile applications with low/no-code.



## Project

A `Project` is nothing more than a workspace for you application. It's a simple way to isolate your applications and manage them. 


## User management

One of the key requirements of almost every application is providing the users the ability to sign up and sign in to the application. User management section includes all 
you need to be able to support these functionalities, also known as `Authentication` in your applications.


## Tables

In order to store your data you can use `Tables`. 

Tables are used to hold information about the items to be represented in your application. Each column in a table holds a certain kind of data and a field stores the actual value of an attribute. The rows in the table represent a collection of related values of one object or entity.


## Providers

A `Provider` is a way to build integrations with third party applications such as Twitter, Stripe, etc., from your application.
Based on the type of third party integration, each provider holds certain parameters and secrets along with some specific parameters.


It's important to know that Providers are shared across all your projects.

## Interactions

`Interactions` give you a way to build simple or complex workflows you can execute in response to a HTTP request, commonly known as an API call.

Each interaction can have one or more `Tasks`, each of which performing a certain action in the entire workflow. You can pass parameters through the API call
to the tasks.


## Automations

`Automations` are very similar to the `Interactions`, however, they are triggered based on an various events, for example whenever an email is received, or a payment is made.

Similar to interactions, automations are composed of one or more `Tasks` and they can have one or more `Triggers`. Each `Trigger` represents an event upon which the automation should be executed.



