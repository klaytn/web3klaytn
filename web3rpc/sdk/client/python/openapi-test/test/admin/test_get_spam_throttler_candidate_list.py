from base.testing import KlaytnBaseTesting


class TestAdminGetSpamThrottlerCandidateList(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.geth.admin.get_spam_throttler_candidate_list()
        self.assertResponseSuccess()
