---
id: 1
title: "My testt Blog"
date: "29/01/2022"
description: "Just fidling atound with and made things to work"
image:
    "https://i.pinimg.com/originals/9c/b0/70/9cb070d62dc738a0c3a1a408d68e4af5.jpg"
filename: "testPost"
tags: ["CSS", "Victory", "Dedication"]
---

# Hi, World!

hi this was just a trial and I am very glad that it all is working properly hi this was just a trial and I am very glad that it all is working properly hi this was just a trial and I am very glad that it all is working properly hi this was just a trial and I am very glad that it all is working properly hi this was just a trial and I am very glad that it all is working properly hi this was just a trial and I am very glad that it all is working properl hi this was just a trial and I am very glad that it all is working properly hi this was just a trial and I am very glad that it all is working properly hi this was just a trial and I am very glad that it all is working properl hi this was just a trial and I am very glad that it all is working properly hi this was just a trial and I am very glad that it all is working properly hi this was just a trial and I am very glad that it all is working properl hi this was just a trial and I am very glad that it all is working properly hi this was just a trial and I am very glad that it all is working properly hi this was just a trial and I am very glad that it all is working properl

> good man
> i love this

1. Today we will learn Dijikstra algorithm
2. It is used to calculate Shortest path
3. It uses dynamic programming


```C
// Dijkstra's Algorithm in C

#include <stdio.h>
#define INFINITY 9999
#define MAX 10

void Dijkstra(int Graph[MAX][MAX], int n, int start);

void Dijkstra(int Graph[MAX][MAX], int n, int start) {
  int cost[MAX][MAX], distance[MAX], pred[MAX];
  int visited[MAX], count, mindistance, nextnode, i, j;

  // Creating cost matrix
  for (i = 0; i < n; i++)
    for (j = 0; j < n; j++)
      if (Graph[i][j] == 0)
        cost[i][j] = INFINITY;
      else
        cost[i][j] = Graph[i][j];

  for (i = 0; i < n; i++) {
    distance[i] = cost[start][i];
    pred[i] = start;
    visited[i] = 0;
  }

  distance[start] = 0;
  visited[start] = 1;
  count = 1;

  while (count < n - 1) {
    mindistance = INFINITY;

    for (i = 0; i < n; i++)
      if (distance[i] < mindistance && !visited[i]) {
        mindistance = distance[i];
        nextnode = i;
      }

    visited[nextnode] = 1;
    for (i = 0; i < n; i++)
      if (!visited[i])
        if (mindistance + cost[nextnode][i] < distance[i]) {
          distance[i] = mindistance + cost[nextnode][i];
          pred[i] = nextnode;
        }
    count++;
  }

  // Printing the distance
  for (i = 0; i < n; i++)
    if (i != start) {
      printf("\nDistance from source to %d: %d", i, distance[i]);
    }
}
int main() {
  int Graph[MAX][MAX], i, j, n, u;
  n = 7;

  Graph[0][0] = 0;
  Graph[0][1] = 0;
  Graph[0][2] = 1;
  Graph[0][3] = 2;
  Graph[0][4] = 0;
  Graph[0][5] = 0;
  Graph[0][6] = 0;

  
  u = 0;
  Dijkstra(Graph, n, u);

  return 0;
}
```