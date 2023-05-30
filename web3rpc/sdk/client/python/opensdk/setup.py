from setuptools import setup, find_packages  # noqa: H301

NAME = "opensdk"
VERSION = "1.0.0"
# To install the library, run the following
#
# python setup.py install
#
# prerequisite: setuptools
# http://pypi.python.org/pypi/setuptools

REQUIRES = [
    "opensdk_python_eth ~= 1.0.0",
    "opensdk_python_klay ~= 1.0.0",
    "opensdk_python_net ~= 1.0.0",
    "opensdk_python_txpool ~= 1.0.0",
    "opensdk_python_personal ~= 1.0.0",
    "opensdk_python_debug ~= 1.0.0",
    "opensdk_python_governance ~= 1.0.0",
    "opensdk_python_admin ~= 1.0.0",

]

setup(
    name=NAME,
    version=VERSION,
    description="KLAYTN OPEN API",
    author="API support",
    author_email="",
    url="",
    keywords=[],
    python_requires=">=3.7",
    install_requires=REQUIRES,
    packages=["opensdk"],
    include_package_data=True,
    license="ISC",
)
