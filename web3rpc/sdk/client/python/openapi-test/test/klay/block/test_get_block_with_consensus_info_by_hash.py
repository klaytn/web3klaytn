from base.testing import KlaytnBaseTesting


class TestKlayGetBlockWithConsensusInfoByHash(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = "0xba647d41423faeebe8a7c64737d284fc2eba6f0388a3e1ebf6243db509ec1577"

    def test_post(self):
        self.response = self.w3.klay.get_block_with_consensus_info_by_hash(
            self.blockHash
        )
        self.assertRegex(self.response["hash"], r'^0x.*$')

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = self.w3.klay.get_block_with_consensus_info_by_hash()
