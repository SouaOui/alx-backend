#!/usr/bin/env python3
""" doc """
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """ method doc """
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)