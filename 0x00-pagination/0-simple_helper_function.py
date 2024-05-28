#!/usr/bin/env python3
"""doc doc"""


def index_range(page, page_size):
    """doc """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
