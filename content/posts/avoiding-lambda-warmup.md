+++
title = 'Avoiding Lambda Warmup'
date = 2023-12-29T15:10:10-06:00
draft = true
+++

Lambda has been powerful when it comes to the concept of serverless. However, in AWS, there's more than just lambdas we can utilize.
When we do this, we can avoid warmup issues which can present themselves when delivering millisecond-critical response times.
