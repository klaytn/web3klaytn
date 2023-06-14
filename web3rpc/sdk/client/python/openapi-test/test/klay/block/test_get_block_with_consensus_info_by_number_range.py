from base.testing import KlaytnBaseTesting


class TestKlayGetBlockWithConsensusInfoByNumberRange(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = 1
        self.numberRange = 10

    def test_post(self):
        self.response = self.w3.klay.get_block_with_consensus_info_by_number_range(
            self.blockHash, self.numberRange
        )
        self.assertResponseSuccess()
