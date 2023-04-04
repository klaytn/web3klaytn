from base.testing import KlaytnBaseTesting


class TestKlayGetBlockWithConsensusInfoByNumberRange(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockHash = 1
        self.numberRange = 10

    def test_post(self):
        klay_response = self.sdk.klay.get_block_with_consensus_info_by_number_range(
            self.blockHash, self.numberRange
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
