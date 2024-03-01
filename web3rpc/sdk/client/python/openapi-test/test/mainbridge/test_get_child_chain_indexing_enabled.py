from base.testing import KlaytnBaseTesting
import unittest


class TestgetChildChainIndexingEnabled(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
       

    def test_post(self):
        self.response = self.w3.mainbridge.get_child_chain_indexing_enabled()


